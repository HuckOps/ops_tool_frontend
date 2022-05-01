import { Breadcrumb, Table } from 'antd';
import { useState } from 'react';
import SearchBox from '../../../component/searchbox';
import { getRequest } from '../../../request';
import styles from './index.module.css';
function ICP() {
    const [icp, seticp] = useState([]);
    const onSearch = value => {
        getRequest('/domain/icp/' + value).then(res => {
            seticp([res]);
            console.log([res]);
        });
    };
    const column = [
        {
            title: '域名',
            dataIndex: 'domain',
        },
        {
            title: '名称',
            dataIndex: 'site_name',
        },
        {
            title: '备案性质',
            dataIndex: 'nature',
        },
        {
            title: '备案主体',
            dataIndex: 'name',
        },
        {
            title: '备案号',
            dataIndex: 'icp',
        },
        {
            title: '网站主页',
            dataIndex: 'site_index',
            render: value => {
                return <a href={'http://' + value}>{value}</a>;
            },
        },
        {
            title: '更新时间',
            dataIndex: 'site_time',
        },
    ];
    return (
        <div>
            <div>
                <Breadcrumb className="tag">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>域名工具箱</Breadcrumb.Item>
                        <Breadcrumb.Item>ICP信息</Breadcrumb.Item>
                    </Breadcrumb>
                </Breadcrumb>
            </div>
            <SearchBox onSearch={onSearch}></SearchBox>
            <div className={styles.result}>
                <Table
                    className={styles.icp_table}
                    columns={column}
                    dataSource={icp}
                    pagination={false}
                ></Table>
            </div>
        </div>
    );
}

export default ICP;
