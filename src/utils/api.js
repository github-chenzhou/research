/**
 * @desc API
 */
let api

if (process.env.NODE_ENV === 'production') {
    api = {
        // 用户权限
        'GET_USER_INFO': '/v/lesson/lesson_user_info',

        // 软件版本号
        'GET_SOFT_VERSION': '/v/lesson/lesson_ppt_version',

        /*------------------*\
           $ 接收器 start
        \*------------------*/

    

        /*------------------*\
          $ 接收器 end
        \*------------------*/


    }
}else {
    api = {
        // 停服务通知
        'HOLD_SERVICE_NOTICE': 'http://apimock.xuetangx.com/mock/115/pc/hole_service_notice/',


        /*------------------*\
           $ 接收器 end
        \*------------------*/
   
    }
}

export default api
