import service from "@/api/index";

/**
 * 获取所有问题列表
 * @returns {*}
 * @constructor
 */
export const GET_QUESTIONS_LIST = function (){
    return service({
        url:'/article/base/listProblem',
        method:'get',
        params:''
    })
}

/**
 * 获取文章详情
 * @param data
 * @returns {*}
 * @constructor
 */
export const GET_QUESTIONS_DETAIL = function (data){
    return service({
        url:'/article/base/queryOneArticleById',
        method:'get',
        params:data
    })
}

/**
 *  根据关键字搜索问题
 * @param query
 * @returns {*}
 * @constructor
 */
export const SEARCH_TARGET = function (query){
    return service({
        url:'/article/base/listProblemByWord',
        method:'get',
        params:query
    })
}

/**
 * 获取六条热点问题
 * @returns {*}
 * @constructor
 */
export const  GET_HOT_QUESTION = function (){
    return service({
        url:'/article/base/listArticleByRand',
        method:'get',
        params:''
    })
}
