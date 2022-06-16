//登录后赋予token
export const SET_TOKEN = function (token) {
    window.localStorage.setItem('Token', token)
}

//userid存储
export const SET_USER_ID = function (id) {
    window.localStorage.setItem('userId', id)
}
