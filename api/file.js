import request from '@/utils/request'
const api_name = '/fileservice/file'
export default {
    getPageList(page, limit) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
        })
    },

    getAllFiles() {
        return request({
            url: `${api_name}/getFiles`,
            method: 'get',
        })
    },

    getById(fileId) {
        return request({
            url: `${api_name}/selectFileById/${fileId}`,
            method: 'get'
        })
    },

    getByTitle(page, limit, file) {
        return request({
            url: `${api_name}/findFileList/${page}/${limit}`,
            method: 'post',
            data: file
        })
    }
}