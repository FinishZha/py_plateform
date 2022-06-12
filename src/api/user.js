const service = require('index')

export const GET_USER_INFO_AXIOS = function (query){
    return service({
        url:'',
        method: 'get',
        params: query
    })
}
