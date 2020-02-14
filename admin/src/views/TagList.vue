<template>
  <div>
    <h1>标签列表</h1>
    <el-table :data="data.data">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="{ row }">
          <el-button type="text" size="small" @click="$router.push(`/tags/edit/${row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TagList extends Vue {
  data = {}
  currentPage = 0
  pageSize = 0
  pageSizes = [10, 20, 30, 40, 50]
  total = 0
  query = {
    limit: 10,
    page: 1
  }

  async fetch() {
    const res = await this.$http.get('tags', {
      params: {
        query: this.query
      }
    })
    this.total = res.data.total
    this.data = res.data
  }
  async handleSizeChange(pageSize) {
    this.query.limit = pageSize
    this.fetch()
  }
  async handleCurrentChange(currentPage) {
    this.query.page = currentPage
    this.fetch()
  }
  async remove(row) {
    try {
      await this.$confirm(`是否确认删除标签 "${row.name}"？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    } catch (e) {
      return
    }
    await this.$http.delete(`tags/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }
  created() {
    this.fetch()
  }
}
</script>

<style>
.pagination {
  margin-top: 20px;
  float: right;
}
</style>
