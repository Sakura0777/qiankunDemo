import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuTagArray:[]
  },
  getters: {
  },
  mutations: {
    pushMenuTag(state,menu){
      state.menuTagArray.push(menu)
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
