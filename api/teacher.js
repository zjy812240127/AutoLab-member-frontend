import request from '@/utils/request'
const api_name = '/eduservice/teacherFront'
export default {
    getPageList(page, limit) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get'
        })
    },

    getById(teacherId) {
        return request({
            url: `${api_name}/getTeacherListById/${teacherId}`,
            method: 'get'
        })
    },

    getOlds() {
        return request({
            url: `/eduservice/teacher/getHotTeachers`,
            method: 'get'
        })
    }
}