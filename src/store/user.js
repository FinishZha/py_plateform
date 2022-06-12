import el from "element-ui/src/locale/lang/el";

export default {
    state:{
        //用户状态
        //OUTLINE   离线
        //ONLINE   在线
        USER_STATE: 'ONLINE',
        USER_INFO:{
            USER_ID:'721157855',
            USER_NAME:'ByteHero',
            USER_HEAD:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            USER_ROAD:'人工智能',
            USER_POINT:'0',
            USER_EMAIL:'2848135295@qq.com',
            USER_PHONE:'19157720829',
            USER_SEX:'男',
        },
    },
    mutations:{
        //获取用户信息
        GET_USER_INFO(state, info){
            state.USER_INFO = info
        },
        //修改用户状态
        CHANGE_USER_STATE(state) {
            if (state.USER_STATE === 'ONLINE') return state.USER_STATE = 'OUTLINE'
            if (state.USER_STATE === 'OUTLINE') return state.USER_STATE = 'ONLINE'
        }
    },
    action:{

    }
}
