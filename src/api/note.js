import service from "@/api/index";
import da from "element-ui/src/locale/lang/da";

/**
 * 根据用户ID获取笔记列表
 * @param query  userId 用户ID
 * @returns {*}
 * @constructor
 */
export const GET_NOTE_LIST = function (query){
    return service({
        url:'/note/common/listNoteByUser',
        method:'get',
        params:query
    })
}

export const DELETE_NOTE = function (data){
    return service({
        url:'/note/common/deleteNote',
        method:'post',
        data:data
    })
}
