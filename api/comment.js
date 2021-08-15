import request from '@/utils/request'
export default {
    getCommentList(courseId, current, limit) {
        return request({
            url: `/eduservice/comment/findComment/${courseId}/${current}/${limit}`,
            method: 'get'
        })
    },

    addComment(comment) {
        return request({
            url: `/eduservice/comment/addComment`,
            method: 'post',
            data: comment
        })
    }
}