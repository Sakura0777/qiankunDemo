import './public-path';
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router';
import actions from './action';

Vue.config.productionTip = false

let router = null;
let instance = null;
function render(props = {}) {
  const { container,data } = props;
  console.log('data',data.router)
    router = new VueRouter({
      mode: 'hash',
      base: window.__POWERED_BY_QIANKUN__?'/vue2-hash-micro-app':'/',
      routes,
    });
    instance = new Vue({
      router,
      store,
      data:()=>{
        return {
          parentRouter:data.router
        }
      },
      render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  actions.setActions(props); //设置action
  let State = null
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('onGlobalStateChange---vue2 history',state);
    State = state
    actions.setState(State)
  },true);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

