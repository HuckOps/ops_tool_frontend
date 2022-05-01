import Whois from '../views/domain/whois';
import IP from '../views/ip/ip';
import DNS from '../views/domain/dns';
import ICP from '../views/domain/icp';
const routers = [
    {
        title: '首页',
        path: '/',
    },
    {
        title: 'IP工具',
        path: '/ip',
        element: <IP />,
    },
    {
        title: 'whois信息',
        path: '/domain/whois/',
        element: <Whois />,
    },
    {
        title: 'DNS验证',
        path: '/domain/dns/',
        element: <DNS />,
    },
    {
        title: 'ICP备案信息',
        path: '/domain/icp/',
        element: <ICP />,
    },
];

export default routers;
