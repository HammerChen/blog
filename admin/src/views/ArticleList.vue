<template>
  <div>
    <h3>文章列表</h3>
    <el-table :data="items">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column prop="updatedAt" label="更新时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('articles')
      this.items = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style></style>
