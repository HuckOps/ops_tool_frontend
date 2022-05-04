import SearchBox from '../../../component/searchbox';
import { Breadcrumb, Table, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { message as antmessage } from 'antd';
function DNS() {
    const message = useRef([]);
    const [messageState, setMessageState] = useState([]);
    const [structData, setstructData] = useState([]);

    var websocket;
    var column = [
        {
            title: 'DNS服务器',
            dataIndex: 'dns_server',
            render: (value, row, index) => {
                const obj = {
                    children: value,
                    props: {},
                };

                obj.props.rowSpan = row.dns_serverSpan;
                return obj;
            },
        },
        {
            title: '记录状态',
            dataIndex: 'status',
            render: value => {
                if (value) {
                    return <Tag color="green">OK</Tag>;
                } else {
                    return <Tag color="red">Failed</Tag>;
                }
            },
            onCell: value => {
                return { rowSpan: value.StatusSpan };
            },
        },
        {
            title: '记录名',
            dataIndex: 'name',
        },
        {
            title: '记录类型',
            dataIndex: 'type',
        },
        {
            title: '记录',
            dataIndex: 'data',
        },
    ];
    const changeData = (data, field) => {
        let count = 0; //重复项的第一项
        let index = 0;

        // while (indexCount < data.length) {

        //     indexCount++;
        // }
        for (var i = 0; i < data.length; i++) {
            if (data[i][field] === data[index][field]) {
                count++;
                data[i][`${field}Span`] = 0;
                data[i][`StatusSpan`] = 0;
                data[index][`${field}Span`] = count;
                data[index][`StatusSpan`] = count;
            } else {
                data[index][`${field}Span`] = count;
                data[index][`StatusSpan`] = count;
                count = 1;
                index = i;
                data[i][`${field}Span`] = count;
                data[i][`StatusSpan`] = count;
            }
        }
        return data;
    };
    useEffect(() => {
        setstructData(changeData(messageState, 'dns_server'));
    }, [messageState]);
    const onmessage = event => {
        const reader = new FileReader();
        reader.readAsText(event.data, 'UTF-8');
        reader.onload = e => {
            const result = JSON.parse(reader.result);
            // if (result.code == 0) {

            message.current = [...message.current, ...result.data];
            setMessageState(message.current);
            // }
        };
    };
    const onSearch = value => {
        message.current = [];
        try {
            websocket.close();
        } catch {}

        websocket = new WebSocket('ws://182.43.9.49:9002/api/ws/dns/' + value);

        websocket.onmessage = onmessage;
        websocket.onerror = function () {
            setstructData([]);
            antmessage.error('查询失败，请勿填入空值');
        };
    };
    return (
        <div>
            <div>
                <Breadcrumb className="tag">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>域名工具箱</Breadcrumb.Item>
                        <Breadcrumb.Item>DNS验证</Breadcrumb.Item>
                    </Breadcrumb>
                </Breadcrumb>
            </div>
            <SearchBox placeholder="请输入查询域名" onSearch={onSearch}></SearchBox>
            <div className={styles.result}>
                <Table
                    className={styles.table}
                    columns={column}
                    dataSource={structData}
                    pagination={false}
                ></Table>
            </div>
        </div>
    );
}

export default DNS;
