import { Col, Popover, Row } from 'antd';
import styles from './index.module.css';
import { GithubOutlined, GlobalOutlined, WechatOutlined } from '@ant-design/icons';
import wechatImage from '../../img/wechat.jpg';
function Top() {
    const wechat = (
        <div>
            <img src={wechatImage} alt="" className={styles.qr_code}></img>
        </div>
    );
    return (
        <div className={styles.top}>
            <Row className={styles.top_row}>
                <Col span={6} push={18}></Col>
                <Col span={18} pull={6}>
                    <span className={styles.header_block}>
                        <a href="https://github.com/HuckOps" className={styles.link}>
                            <GithubOutlined /> GitHub
                        </a>
                    </span>
                    <span className={styles.header_block}>
                        <a href="http://huckops.github.io/" className={styles.link}>
                            <GlobalOutlined /> HuckOps的博客
                        </a>
                    </span>
                    <Popover content={wechat} className={styles.header_block}>
                        <a className={styles.link} href>
                            <WechatOutlined /> 微信
                        </a>
                    </Popover>
                </Col>
            </Row>
        </div>
    );
}
export default Top;
