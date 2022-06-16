import service from '@/api/index'

/**
 * 用户登录
 * @param data 传入用户账号和密码
 * @returns {*}
 * @constructor
 */
export const USER_LOGIN = function(data){
    return service({
        url:'/user/base/userLogin',
        method:'post',
        data:data
    })
}

/**
 * 用户注册
 * @param data
 *      username 用户名
 *      password 密码
 *      rwPassword 重复密码
 *      code 验证码
 *      email 邮箱
 * @returns {*}
 * @constructor
 */
export const USER_REGISTER = function (data){
    return service({
        url:'/user/base/userRegister',
        method:'post',
        data:data
    })
}

/**
 * 用户注册发送验证码
 * @param data 传入用户邮箱
 * @returns {*}
 * @constructor
 */
export const POST_CODE_EMIL = function (data){
    return service({
        url:'/user/base/sendMessage',
        method:'post',
        data:data
    })
}

/**
 * 获取用户信息
 * @param query userId 用户ID
 * @returns {*}
 * @constructor
 */
export const GET_USER_INFO_AXIOS = function (query){
    return service({
        url:'/user/common/queryOneUser',
        method: 'get',
        params: query
    })
}

/**
 * 用户修改名字
 * @param data
 *      userId 用户ID
 *      username 用户新名
 * @returns {*}
 * @constructor
 */
export const CHANGE_USER_NAME = function (data){
    return service({
        url:'/user/common/updateUserInfo',
        method:'post',
        data:data
    })
}

/**
 * 用户修改学习方向
 * @param data
 *      userId 用户ID
 *      userDirection 用户新方向的ID
 * @returns {*}
 * @constructor
 */
export const CHANGE_USER_ROAD = function (data){
    return service({
        url:'/user/common/updateUserDirection',
        method:'post',
        data:data
    })
}

/**
 * 用户修改头像
 * @param data
 *      userId 用户ID
 *      headPicture 用户新头像
 * @returns {*}
 * @constructor
 */
export const CHANGE_USER_HEAD = function (data){
    return service({
        url:'/user/common/updateHeadPicture',
        method:'post',
        data:data
    })
}

/**
 * 用户修改邮箱
 * @param data
 *      userId 用户ID
 *      newEmail 用户新邮箱
 * @returns {*}
 * @constructor
 */
export const CHANGE_USER_EMAIL = function (data){
    return service({
        url:'/user/common/updateEmail',
        method:'post',
        data:data
    })
}

/**
 * 用户修改密码
 * @param data
 *      id 用户ID
 *      oldPassword 用户旧密码
 *      newPassword 用户新密码
 *      rwPassword 用户重复密码
 * @returns {*}
 * @constructor
 */
export const CHANGE_USER_PASSWORD = function (data){
    return service({
        url:'/user/common/updatePassword',
        method:'post',
        data:data
    })
}

