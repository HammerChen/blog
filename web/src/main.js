import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3009/web/api'
})

Vue.config.productionTip = false

import './style.css'
import './style.scss'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
