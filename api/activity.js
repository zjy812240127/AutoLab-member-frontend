import request from '@/utils/request'
export default {
    getActivityList() {
        return request({
            url: `/eduservice/activity/getHotActivity`,
            method: 'get'
        })
    },

    getPageList(current, limit) {
        return request({
            url: `/eduservice/activity/getPageList/${current}/${limit}`,
            method: 'get'
        })
    },

    getById(id) {
        return request({
            url: `/eduservice/activity/selectById/${id}`,
            method: 'get'
        })
    }
}