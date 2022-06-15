import service from '@/api/index'

/**
 * 根据线路id获取学习路线
 * @param query directionId 学习路线ID
 * @returns {*}
 * @constructor
 */
export const GET_STUDY_ROAD = function (query){
    return service({
        url:'/direction/common/queryOneDirectionById',
        method: 'get',
        params: query
    })
}
