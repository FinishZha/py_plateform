export default {
    state:{
        //编辑器代码
        CODE:'',
        CODE_RESULT:'这里是结果...'
    },
    mutations:{
        //捕获代码结果
        CATCH_CODE_RESULT(state, res){
            state.CODE_RESULT = res
        }
    },
    action:{}
}
