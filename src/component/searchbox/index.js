import styles from './index.module.css';
import { Breadcrumb, Input, Space } from 'antd';
const { Search } = Input;
function SearchBox(props) {
    return (
        <div className={styles.search_box}>
            <Space className={styles.search_space}>
                <Search
                    allowClear
                    enterButton="查询"
                    size="large"
                    className={styles.search}
                    placeholder={props.placeholder}
                    onSearch={props.onSearch}
                ></Search>
            </Space>
        </div>
    );
}

export default SearchBox;
