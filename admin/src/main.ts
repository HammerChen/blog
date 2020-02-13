import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
