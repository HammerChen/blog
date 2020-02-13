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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TagList extends Vue {
  data = {}
  async fetch() {
    const res = await this.$http.get('tags')
    this.data = res.data
  }
  async remove(row) {
    this.$confirm(`是否确定删除标签 "${row.name}"`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(async () => {
        const res = await this.$http.delete(`tags/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
      .catch(() => {})
  }
  created() {
    this.fetch()
  }
}
</script>
