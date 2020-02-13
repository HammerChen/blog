import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import TagEdit from '../views/TagEdit.vue'
import TagList from '../views/TagList.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', path: '/', component: Home },
      {
        name: 'article-list',
        path: '/articles/create',
        component: ArticleEdit
      },
      {
        name: 'article-edit',
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        name: 'article-create',
        path: '/articles/list',
        component: ArticleList
      },

      { name: 'tag-list', path: '/tags/create', component: TagEdit },
      {
        name: 'tag-edit',
        path: '/tags/edit/:id',
        component: TagEdit,
        props: true
      },
      { name: 'tag-create', path: '/tags/list', component: TagList }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
