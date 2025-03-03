import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import { registerMicroApps,start} from 'qiankun'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
registerMicroApps([
  {
    name:'vue2-hash-micro-app',
    entry:'http://localhost:7777',
    container:'#appContainer',
    activeRule: '/vue2-hash-micro-app',
    props:{data:{router}}
  },
  {
    name:'vue2-micro-app',
    entry:'http://localhost:8888',
    container:'#appContainer',
    activeRule: '/vue2-micro-app'
  }, 
  {
    name:'vue3-micro-app',
    entry:'http://localhost:9999',
    container:'#appContainer',
    activeRule: '/vue3-micro-app'
  }
],
  {      
   beforeLoad: (app) => console.log('before load', app.name),       
   beforeMount: (app) => console.log('before mount', app.name)    
  })
start()
