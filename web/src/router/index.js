import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../views/ArticleList.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [{ path: '/', name: 'ArticleList', component: ArticleList }]
  }
]

const router = new VueRouter({
  routes
})

export default router
