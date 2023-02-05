import request from './request';

//创建订单
export async function addOrder(params) {
    return request({
        url: '/order',
        method: 'post',
        data: params
    });
};

//订单id查询订单详情
export async function getOrderById(id) {
    return request({
        url: '/order/' + id,
        method: 'get'
    });
};

//用户ID查询所有订单
export async function queryAllOrder(id) {
    return request({
        url: '/order/user/' + id,
        method: 'get',
    });
};

//订单ID删除订单
export async function delOrder(id) {
    return request({
        url: '/order/' + id,
        method: 'delete',
    });
};