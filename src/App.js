import './App.css';
import { Menu } from 'antd';
import nav from './nav';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routers from './routers';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Top from './component/top';
import Footer from './component/footer';
function App() {
    const [select, setSelect] = useState();
    return (
        <div className="container">
            <div className="App">
                <Router>
                    <Top></Top>
                    <Menu mode="horizontal" defaultSelectedKeys={[select]}>
                        {nav.map(item => {
                            if (item.childMenu.length) {
                                return (
                                    <Menu.SubMenu title={item.label} key={item.key}>
                                        {item.childMenu.map(child => {
                                            return (
                                                <Menu.Item key={child.key}>
                                                    <Link to={child.path}>{child.label}</Link>
                                                </Menu.Item>
                                            );
                                        })}
                                    </Menu.SubMenu>
                                );
                            } else {
                                return (
                                    <Menu.Item key={item.key}>
                                        <Link to={item.path}>{item.label}</Link>
                                    </Menu.Item>
                                );
                            }
                        })}
                    </Menu>
                    <div className="body">
                        <div className="service">
                            <Routes>
                                {routers.map((item, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            exact
                                            path={item.path}
                                            element={item.element}
                                            // element={<item.component />} // 不是老版本的：component 或 render
                                            // onEnter、onBeforeMount、onMounted事件，会在组件初始化时执行一次，切换路由不执行
                                            // 若 修改 document.title 查看文档：https://blog.csdn.net/weixin_44461275/article/details/122843160
                                        />
                                    );
                                })}
                            </Routes>
                        </div>
                        <Footer></Footer>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
