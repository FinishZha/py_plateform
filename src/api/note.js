import service from "@/api/index";

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

/**
 * 删除指定的笔记
 * @param data noteId 笔记ID
 * @returns {*}
 * @constructor
 */
export const DELETE_NOTE = function (data){
    return service({
        url:'/note/common/deleteNote',
        method:'post',
        data:data
    })
}

/**
 *保存（添加）笔记功能
 * @param data
 * @returns {*}
 * @constructor
 */
export const SAVE_NOTE = function (data){
    return service({
        url:'/note/common/addNote',
        method:'post',
        data:data
    })
}

/**
 * 修改笔记
 * @param data
 *      userId 用户ID
 *      noteId 笔记ID
 *      title   修改后标题
 *      content 修改后内容
 * @returns {*}
 * @constructor
 */
export const UPDATE_NOTE = function (data){
    return service({
        url:'/note/common/updateNote',
        method:'post',
        data:data
    })
}

/**
 * 获取指定的笔记
 * @param query noteId 笔记ID
 * @returns {*}
 * @constructor
 */
export const GET_TARGET_NOTE = function (query){
    return service({
        url:'/note/common/queryOneNoteById',
        method:'get',
        params:query
    })
}
