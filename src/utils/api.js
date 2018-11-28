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

        /*------------------*\
           $ 接收器 start
        \*------------------*/

    

        /*------------------*\
          $ 接收器 end
        \*------------------*/


    }
}else {
    api = {
        // 用户权限
        'GET_USER_INFO': '/services/qy-weixin/user',

        // /api/userServlet?phoneNum=13721441400&actionType=login#/
        'LOGIN': '/api/userAction!do_weixinLogin.action',
        'GET_PROJECTS': '/api/userServlet',


        /*------------------*\
           $ 接收器 end
        \*------------------*/
   
    }
}

export default api
