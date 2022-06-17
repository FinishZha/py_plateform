import service from "@/api/index";

/**
 * 获取模块书籍
 * @param query
 * @returns {*}
 * @constructor
 */
export const GET_BOOK_LIST = function (query){
    return service({
        url:'/book/common/listBookByModel',
        method:'get',
        params:query
    })
}
