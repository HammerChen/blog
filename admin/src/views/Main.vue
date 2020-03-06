<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-collection"></i>内容管理</template
          >
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/">文章列表</el-menu-item>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">标签</template>
            <el-menu-item index="/tags/list">标签列表</el-menu-item>
            <el-menu-item index="/tags/create">新建标签</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span style="margin-right: 18px;">@ 陈小锤</span>
      </el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
