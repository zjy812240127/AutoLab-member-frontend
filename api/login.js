import request from '@/utils/request'
export default {
    //登录
    submitLogin(userInfo) {
        return request({
            url: `/eduuct/apimember/login`,
            method: 'post',
            data: userInfo
        })
    },
    //根据token获取用户信息
    getLoginInfo() {
        return request({
                url: `/eduuct/apimember/getLoginInfo`,
                method: 'get',
                // headers: {'token': cookie.get('guli_token')}
            })
            //headers: {'token': cookie.get('guli_token')}
    },

    // getLoginAdminInfo() {
    //     return request({
    //             url: `/eduuct/apimember/getLoginInfo`,
    //             method: 'get',
    //             // headers: {'token': cookie.get('guli_token')}
    //         })
    //         //headers: {'token': cookie.get('guli_token')}
    // },

    memberLogin(loginVo) {
        return request({
            url: `/eduuct/apimember/login`,
            method: 'post',
            data: loginVo
        })
    },

    adminLogin(mobile, password) {
        return request({
            url: `/loginservice/login/GetToken/${mobile}/${password}`,
            method: 'get'
        })
    }
}