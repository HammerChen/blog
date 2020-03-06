import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', component: ArticleList },
      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
