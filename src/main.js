import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/style/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import eveUi from 'eve-ui'
import 'eve-ui/lib/eve-ui.css'
import config from '@/config'

Vue.use(ElementUI)
Vue.use(eveUi)
Vue.config.productionTip = false
config.mock && require('@/mock')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
