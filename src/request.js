import axios from 'axios';
import { message } from 'antd';

// 统一请求路径前缀
let base = '/api';

// 接口环境地址
// let API_ROOT = process.env.API_ROOT

// 超时设定
axios.defaults.timeout = 15000;
// 跨域访问携带cookie
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.resolve(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        switch (response.data.code) {
            case 0:
                return response.data.data;
            case 1:
                console.log(response.data.msg);
                break;
            default:
                console.log(response.data.msg);
        }
    },
    err => {
        message.error('请求失败，检查参数');
        return Promise.reject(err);
        // return Promise.resolve(err);
    }
);

// get 请求
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params,
        headers: {},
    });
};

// post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [
            function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                ret = ret.substring(0, ret.length - 1);
                return ret;
            },
        ],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};

export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [
            function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                ret = ret.substring(0, ret.length - 1);
                return ret;
            },
        ],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};

export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        headers: {},
    });
};
