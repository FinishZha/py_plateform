export default {
    state:{
        //用户状态
        //OUTLINE   离线
        //ONLINE   在线
        USER_STATE: 'OUTLINE',
        USER_INFO:{
            USER_ID:'721157855',
            USER_NAME:'ByteHero',
            USER_HEAD:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            USER_ROAD:'大数据',
            USER_POINT:'0',
            USER_EMAIL:'2848135295@qq.com',
            USER_PHONE:'19157720829',
            USER_SEX:'男',
        },
    },
    mutations:{
        //获取用户信息
        EMIT_USER_INFO(state, info){
            state.USER_INFO.USER_NAME = info.name
            state.USER_INFO.USER_ID = info.id
            state.USER_INFO.USER_EMAIL = info.email
            state.USER_INFO.USER_HEAD = info.header
        },
        //用户登录完成
        USER_RNTER(state) {
            if (state.USER_STATE === 'OUTLINE') return state.USER_STATE = 'ONLINE'
        },
        //用户状态配置

        //用户退出登录
        USER_LEAVE(state) {
            if (state.USER_STATE === 'ONLINE') return state.USER_STATE = 'OUTLINE'
        }
    },
    action:{

    }
}
