import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
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
      {
        name: 'article-list',
        path: '/',
        component: ArticleList
      },
      {
        name: 'article-create',
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
        name: 'tag-list',
        path: '/tags/list',
        component: TagList
      },
      {
        name: 'tag-create',
        path: '/tags/create',
        component: TagEdit
      },
      {
        name: 'tag-edit',
        path: '/tags/edit/:id',
        component: TagEdit,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
