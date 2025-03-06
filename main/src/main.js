import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import apps from './app'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import { registerMicroApps, start} from 'qiankun'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
registerMicroApps(apps,
  {      
   beforeLoad: (app) => console.log('before load', app.name),       
   beforeMount: (app) => console.log('before mount', app.name)    
  })
start()
