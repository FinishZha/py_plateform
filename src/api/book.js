import service from "@/api/index";

/**
 * 获取模块书籍
 * @param query
 * @returns {*}
 * @constructor
 */
export const GET_BOOK_LIST = function (query){
    return service({
        url:'/book/base/listBookByModel',
        method:'get',
        params:query
    })
}


/**
 * 获取指定书籍的内容
 * @param query bookId 书籍ID
 * @returns {*}
 * @constructor
 */
export const GET_TARGET_BOOK = function (query){
    return service({
        url:'/book/base/queryOneBookById',
        method:'get',
        params:query
    })
}
