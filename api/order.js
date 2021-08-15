import request from '@/utils/request'
export default {
    //1、创建订单
    createOrder(cid) {
        return request({
            url: '/eduorder/order/newOrder/' + cid,
            method: 'get'
        })
    },
    //2、根据id获取订单
    getById(cid) {
        return request({
            url: '/eduorder/order/getOrderInfoById/' + cid,
            method: 'get'
        })
    },
    //3、生成微信支付二维码
    createNative(cid) {
        return request({
            url: '/eduorder/paylog/createNative/' + cid,
            method: 'get'
        })
    },
    //4、根据id获取订单支付状态
    queryPayStatus(cid) {
        return request({
            url: '/eduorder/paylog/queryPayStatus/' + cid,
            method: 'get'
        })
    }
}