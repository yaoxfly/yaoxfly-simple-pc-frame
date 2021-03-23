import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/style/initialize.css'
import 'element-ui/lib/theme-chalk/index.css'
import eveUi from 'eve-ui'
import 'eve-ui/lib/eve-ui.css'
Vue.use(ElementUI)
Vue.use(eveUi)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
