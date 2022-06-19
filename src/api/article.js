import service from "@/api/index";

export const SEARCH_TARGET = function (query){
    return service({
        url:'/article/common/listProblemByWord',
        method:'get',
        params:query
    })
}
