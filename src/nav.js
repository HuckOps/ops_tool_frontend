const nav = [
    {
        label: "首页",
        key: "index",
        path: "/",
        childMenu:[]
    },{
        label: "IP工具箱",
        key: "ip_tool_box",
        childMenu:[
            {
                "label": "IP信息查询",
                "key": "ip_info",
                "path": "/ip/"
            }
        ]
    },{
        label: "域名工具箱",
        key: "domain_tool_box",
        childMenu:[
            {
                "label": "Whois信息查询",
                "key": "domain_info",
                "path": "/domain/whois/"
            },{
                "label": "DNS查询",
                "key": "dns_resolve",
                "path": "/domain/dns/"
            },{
                "label": "ICP信息查询",
                "key": "icp_search",
                "path": "/domain/icp/"
            }
        ]
    }
];

export default nav;