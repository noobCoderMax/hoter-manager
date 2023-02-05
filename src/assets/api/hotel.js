import request from './request';

//查询用户经纬度酒店
export async function getLocation(id) {
    return request({
        url: '/hotel/addr/' + id,
        method: 'get'
    });
};

//查询精品酒店
export async function boutiqueHotel() {
    return request({
        url: '/hotel/boutiqueHotel',
        method: 'get'
    });
};

//查询商务酒店
export async function businessHotel() {
    return request({
        url: '/hotel/businessHotel',
        method: 'get'
    });
};

//id查询酒店
export async function getById(id) {
    return request({
        url: '/hotel/' + id,
        method: 'get'
    });
};

//分页条件查询酒店
export async function pageHotel(params) {
    return request({
        url: '/hotel/page',
        method: 'post',
        data: params
    });
};

//分类查询酒店
export async function classify(params) {
    return request({
        url: '/hotel/classify',
        method: 'post',
        data: params
    });
};