import service from "@/api/index";

/**
 * 获取所有问题列表
 * @returns {*}
 * @constructor
 */
export const GET_QUESTIONS_LIST = function (){
    return service({
        url:'/article/common/listProblem',
        method:'get',
        params:''
    })
}


export const GET_QUESTIONS_DETAIL = function (data){
    return service({
        url:'/article/common/queryOneArticleById',
        method:'get',
        params:data
    })
}



