/**
 * @desc API
 */
let api

if (process.env.NODE_ENV === 'production') {
    api = {
        // 用户权限
        'GET_USER_INFO': '/services/qy-weixin/user',

        // /api/userServlet?phoneNum=13721441400&actionType=login#/
        'LOGIN': '/api/userAction!do_weixinLogin.action',
        'GET_PROJECTS': '/api/userServlet',

        // http://192.168.89.104/userServlet?actionType=todolist&groupId=2
        'COMMON_ACTION': '/api/userServlet',


    }
} else {
    api = {
        // 用户权限
        'GET_USER_INFO': '/services/qy-weixin/user',

        // /api/userServlet?phoneNum=13721441400&actionType=login#/
        'LOGIN': '/api/userAction!do_weixinLogin.action',
        'GET_PROJECTS': '/api/userServlet',

        // http://192.168.89.104/userServlet?actionType=todolist&groupId=2
        'COMMON_ACTION': '/api/userServlet',

    }
}

export default api