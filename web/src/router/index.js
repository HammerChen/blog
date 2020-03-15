import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: 'ArticleList', component: ArticleList },
      {
        path: '/articles/:id',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
