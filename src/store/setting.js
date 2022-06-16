/**
 * HERE ARE RULES && SETTING OF PAGES WHICH WERE INCLUDE THIS PROJECT
 *     RULE OR CONSTRAINT:
 *      PAGE_NAME-SETTING: VALUE
 */
export default {
    state:{
        // 在/views/codeonline.vue中,用于在线编码的窗口打开（开关状态）
       ONLINE_DEFINE_OPEN: false,
        //在/components/User/NoteBookCard.vue中，用于个人中心中个人笔记列表的空展示
       NOTEBOOK_LIST_EMPTY: true
    },
    mutations:{
        // 在/views/codeonline.vue中,用于在线编码的窗口打开（开关控制）
        CHANGE_ONLINE_DEFINE_OPEN(state){
            state.ONLINE_DEFINE_OPEN = !state.ONLINE_DEFINE_OPEN
        },
        //在/components/User/NoteBookCard.vue中，用于个人中心中个人笔记列表的空展示(开关控制)
        CHANGE_NOTEBOOK_LIST_EMPTY(state, val){
            state.NOTEBOOK_LIST_EMPTY = val
        }
    }
}
