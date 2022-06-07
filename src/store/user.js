export default {
    state:{
        USER_INFO:{
            USER_NAME:'',
            USER_ROAD:''
        }
    },
    mutations:{
        GET_USER_INFO(state, info){
            state.USER_INFO = info
        }
    }
}
