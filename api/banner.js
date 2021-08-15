import request from '@/utils/request'
export default {
    getBannerList() {
        return request({
            url: `/educms/banner/getBannerLastly`,
            method: 'get'
        })
    }
}