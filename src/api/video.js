import service from "@/api/index";

/**
 * 根据模块获取视频
 * @param query modelId 模块ID
 * @returns {*}
 * @constructor
 */
export const GET_VIDEO_LIST = function (query){
    return service({
        url:'/video/common/listVideoByModel',
        method:'get',
        params:query
    })
}
