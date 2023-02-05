import request from './request';

//注册
export async function register(params) {
    return request({
        url: '/user/register',
        method: 'post',
        data: params
    });
};

//登录
export async function login(params) {
    return request({
        url: '/user/login',
        method: 'post',
        data: params
    });
};

//联系我们
export async function contact(params) {
    return request({
        url: '/user',
        method: 'post',
        data: params
    });
};

//获取邮箱激活码
export async function getActivationCode(params) {
    return request({
        url: '/user/code',
        method: 'post',
        data: params
    });
};



export async function changePassword(params) {
    return request({
        url: '/user/upd',
        method: 'post',
        data: params
    });
};


//ID获取用户
export async function getUserById(id) {
    return request({
        url: '/user/' + id,
        method: 'get',
    });
};


//修改用户
export async function updateUserInfo(params) {
    return request({
        url: '/user',
        method: 'put',
        data: params
    });
};


//更换头像
export async function updateAvator(params) {
    return request({
        url: '/user/avator',
        method: 'post',
        data: params
    });
};


//查询登录记录
export async function getLoginRecord(id) {
    return request({
        url: '/user//loginRecord/' + id,
        method: 'get',
    });
};

//删除登录记录
export async function delLoginRecord(id) {
    return request({
        url: '/user/loginRecord/' + id,
        method: 'delete',
    });
};




//查询浏览记录
export async function getBrowserRecord(id) {
    return request({
        url: '/user//browserRecord/' + id,
        method: 'get',
    });
};

//添加浏览记录
export async function addBrowserRecord(params) {
    return request({
        url: '/user/browserRecord',
        method: 'post',
        data: params
    });
};


//删除浏览记录
export async function delBrowserRecord(id) {
    return request({
        url: '/user//browserRecord/' + id,
        method: 'delete',
    });
};