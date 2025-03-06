import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuTagArray:[{name:'首页',path:'/',menuRoute:[]}],
    activedTagIndex:0
  },
  getters: {
  },
  mutations: {
    setActivedTagIndex(state,index){
      state.activedTagIndex = index
    },
    setMenuTagArray(state,data){
      state.menuTagArray = data
    },
    pushMenuTag(state,menu){
      const index = state.menuTagArray.findIndex(i=>i.path === menu.path)
      // console.log('pushMenuTag',index)
      if(index === -1){
        state.activedTagIndex = state.menuTagArray.length
        state.menuTagArray.push(menu)
      }else{
        state.activedTagIndex = index
      }

    },
    delMenuTag(state,index){
      state.menuTagArray.splice(index,1) 
    }
  },
  actions: {
  },
  modules: {
  }
})
