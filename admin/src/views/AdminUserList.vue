<template>
  <div style="margin-right: 18px;">
    <h3>管理员列表</h3>
    <el-table :data="items">
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template v-slot="{ row }">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/admin_users/edit/${row._id}`)"
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
      const res = await this.$http.get('rest/admin_users')
      this.items = res.data
    },
    async remove(row) {
      this.$confirm(`是否确认删除管理员 “${row.username}”`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`rest/admin_users/${row._id}`)
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
