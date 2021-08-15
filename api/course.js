import request from '@/utils/request'
export default {
    // 条件分类查询
    getPageList(page, limit, searchObj) {
        return request({
            url: `/eduservice/courseFront/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    // 查询所有课程分类的
    getAllSubject() {
        return request({
            url: `/eduservice/subject/listSubject`,
            method: 'get',
        })
    },
    // 获取课程二级分类
    getNestedTreeList2() {
        return request({
            url: `/eduservice/edu/course/list2`,
            method: 'get'
        })
    },

    // 根据课程id获取课程信息
    getCourseInfoById(courseId) {
        return request({
            url: `/eduservice/course/${courseId}`,
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