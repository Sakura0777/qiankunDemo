import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import routes from './router';
import store from './store';

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
    router = createRouter({
        history:window.__POWERED_BY_QIANKUN__?createWebHistory('/vue3-micro-app/'):createWebHistory(process.env.BASE_URL),
        routes,
      });
  instance = createApp(App).use(store).use(router)
  .mount(container ? container.querySelector('#app') : '#app')
  
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
  render(props);
}
export async function unmount() {
  instance = null;
  router = null;
}