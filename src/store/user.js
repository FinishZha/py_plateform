export default {
    state:{
        //用户状态
        //OUTLINE   离线
        //ONLINE   在线
        USER_STATE: 'OUTLINE',
        USER_INFO:{
            USER_NAME:'',
            USER_HEAD:'',
            USER_ROAD:'',
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
