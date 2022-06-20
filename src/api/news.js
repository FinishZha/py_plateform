import service from "@/api/index";

/**
 * 获取热点新闻
 * @returns {*}
 * @constructor
 */
export const GET_HOT_MEWS_LIST = function (){
    return service({
        url:'/news/base/listNewsByRand',
        method:'get',
        params:''
    })
}


/**
 * 获取指定新闻内容
 * @returns {*}
 * @constructor
 */
export const GET_HOT_MEWS_DETAIL = function (query){
    return service({
        url:'/news/base/queryOneNewsById',
        method:'get',
        params:query
    })
}

/**
 * 获取所有新闻
 * @param query
 * @returns {*}
 * @constructor
 */
export const GET_ALL_NEWS = function (){
    return service({
        url:'/news/base/listNewsByAll',
        method:'get',
        params:''
    })
}
