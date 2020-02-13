<template>
  <el-container>
    <el-aside width="200px;">
      <el-menu
        mode="vertical"
        style="height:100vh;"
        :default-active="$route.path"
        router
      >
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}}`"
        >
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            v-for="(subItem, subIndex) in item.items"
            :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path"
            >{{ subItem.title }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <h3>陈小锤的博客 - 后台管理界面</h3>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: '文章管理',
        items: [
          { title: '首页', path: '/' },
          { title: '文章列表', path: '/articles/list' },
          { title: '新建文章', path: '/articles/create' }
        ]
      },
      {
        title: '标签管理',
        items: [
          { title: '标签列表', path: '/tags/list' },
          { title: '新建标签', path: '/tags/create' }
        ]
      }
    ]
  }
}
</script>

<style>
.el-header {
  line-height: 60px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
}
</style>
