import styles from './index.module.css';
import { Divider } from 'antd';
import { Breadcrumb } from 'antd';
import SearchBox from '../../../component/searchbox';
import { getRequest } from '../../../request';
import { useState } from 'react';
function Whois() {
    // const [domain, setDomain] = useState("");
    const [whois, setWhois] = useState('');
    const onSearch = value => {
        getRequest('/domain/whois/' + value).then(res => {
            setWhois(res);
        });
    };
    const eng = () => {
        return whois.details;
    };
    return (
        <div className={styles.domain_info}>
            <div>
                <Breadcrumb className="tag">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>域名工具箱</Breadcrumb.Item>
                        <Breadcrumb.Item>Whois信息查询</Breadcrumb.Item>
                    </Breadcrumb>
                </Breadcrumb>
            </div>
            <SearchBox placeholder="请输入查询域名" onSearch={onSearch}></SearchBox>
            <div className={styles.result}>
                <div className={styles.update}>获取信息时间：{whois.dom_upddate}</div>
                <div>
                    <table className={styles.result_tab}>
                        <tbody>
                            <tr className={styles.row}>
                                <td className={styles.title}>域名</td>
                                <td className={styles.value}>{whois.domain}</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.title}>注册商</td>
                                <td className={styles.value}>{whois.registrar}</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.title}>注册日期</td>
                                <td className={styles.value}>{whois.dom_insdate}</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.title}>到期日期</td>
                                <td className={styles.value}>{whois.dom_expdate}</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.title}>联系邮箱</td>
                                <td className={styles.value}>{whois.contact_email}</td>
                            </tr>
                            <tr className={styles.row}>
                                <td className={styles.title}>DNS服务器</td>
                                <td className={styles.value}>{whois.name_server}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Divider></Divider>
                    <div>
                        <span>以下为英文注册信息：</span>
                        <div id="eng">{eng()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whois;
