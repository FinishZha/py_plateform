import service from "@/api/index";

/**
 * 获取导向问卷
 * @returns {*} 所有题目及答案
 * @constructor
 */
export const GET_START_QUESTION = function (){
    return service({
        url:'/question/common/listQuestionByAsk',
        method:'get',
        params:''
    })
}
