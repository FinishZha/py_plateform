/**
 * HERE ARE RULES && SETTING OF PAGES WHICH WERE INCLUDE THIS PROJECT
 *     RULE OR CONSTRAINT:
 *      PAGE_NAME-SETTING: VALUE
 */
export default {
    state:{
        //** views/codeonline.vue
       ONLINE_DEFINE_OPEN: true
    },
    mutations:{
        CHANGE_ONLINE_DEFINE_OPEN(state){
            state.ONLINE_DEFINE_OPEN = !state.ONLINE_DEFINE_OPEN
        }
    }
}
