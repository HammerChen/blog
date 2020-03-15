import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

import './assets/scss/style.scss'

import router from './router'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3009/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
