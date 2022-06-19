export default {
    state:{
        //用户状态
        //OUTLINE   离线
        //ONLINE   在线
        USER_STATE: 'OUTLINE',
        USER_INFO:{
            USER_ID:'',
            USER_NAME:'ByteHero',
            USER_HEAD:'',
            USER_ROAD:'',
            USER_POINT:'0',
            USER_EMAIL:'2848135295@qq.com',
            USER_PHONE:'19157720829',
            USER_SEX:'男'
        },
        USER_TOKEN:''
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
        USER_ENTER(state) {
            if (state.USER_STATE === 'OUTLINE') return state.USER_STATE = 'ONLINE'
        },
        //捕获Token
        GET_TOKEN(state, token){
            state.USER_TOKEN = token
        },
        //用户退出登录
        USER_LEAVE(state) {
            state.USER_INFO = {
                USER_ID:'',
                USER_NAME:'',
                USER_HEAD:'',
                USER_ROAD:'',
                USER_POINT:'',
                USER_EMAIL:'',
                USER_PHONE:'',
                USER_SEX:''
            }
            if (state.USER_STATE === 'ONLINE') return state.USER_STATE = 'OUTLINE'
        }
    },
    action:{

    }
}
