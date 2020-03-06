<template>
  <div style="margin-right: 18px;">
    <h3>文章列表</h3>
    <el-table :data="items">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column prop="updatedAt" label="更新时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template v-slot="{ row }">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/articles/edit/${row._id}`)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="remove(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
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
      const res = await this.$http.get('rest/articles')
      this.items = res.data
    },
    async remove(row) {
      this.$confirm(`是否确认删除文章《${row.title}》`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`rest/articles/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch()
        })
        .catch(() => {
          return
        })
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style></style>
