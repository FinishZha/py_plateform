import service from "@/api/index";

export const GET_ARTICLE_BY_ID = function (query){
    return service({
        url:'/article/common/listArticleByModel',
        method:'get',
        params:query
    })
}
