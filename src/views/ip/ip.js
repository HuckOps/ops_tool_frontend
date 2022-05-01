import styles from './ip.module.css';
import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { getRequest } from '../../request';
import SearchBox from '../../component/searchbox';

function IP() {
    const [info, setInfo] = useState({});
    const [ip, setIP] = useState('');
    useEffect(() => {
        console.log('test');
        getRequest('/ip_tool/' + ip).then(res => {
            // console.log(info)
            setInfo(res);
        });
    }, [ip]);
    const onSearch = value => {
        setIP(value);
    };
    return (
        <div className={styles.ip_info}>
            <div>
                <Breadcrumb className="tag">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>IP工具箱</Breadcrumb.Item>
                        <Breadcrumb.Item>IP信息查询</Breadcrumb.Item>
                    </Breadcrumb>
                </Breadcrumb>
            </div>
            <SearchBox placeholder="请输入查询IP" onSearch={onSearch}></SearchBox>
            <div className={styles.result}>
                <div className={styles.result_div}>
                    <table className={styles.result_table}>
                        <tbody>
                            <tr>
                                <td className="title">查询IP</td>
                                <td className="value">{info.ip}</td>
                            </tr>
                            <tr>
                                <td className="title">国家</td>
                                <td className="value">{info.country}</td>
                            </tr>
                            <tr>
                                <td className="title">省</td>
                                <td className="value">{info.province}</td>
                            </tr>
                            <tr>
                                <td className="title">市</td>
                                <td className="value">{info.city}</td>
                            </tr>
                            <tr>
                                <td className="title">ISP</td>
                                <td className="value">{info.isp}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default IP;
