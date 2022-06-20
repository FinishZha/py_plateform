import service from '@/api/index'

/**
 * 运行代码
 * @param data code Python代码
 * @returns {*}
 * @constructor
 */
export const RUN_CODE = function (data){
    return service({
        url:'/code/common/run',
        method: 'post',
        data: data
    })
}


export const GET_EXERCISES = function (query){
    return service({
        url:'/question/common/listQuestionByModel',
        method: 'get',
        params: query
    })
}
