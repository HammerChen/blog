import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true },
      { path: '/articles/list', component: ArticleList }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
