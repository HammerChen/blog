<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="data.data">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="标签">
        <template slot-scope="{ row }">
          <span
            v-for="item in row.tags"
            :key="item._id"
            :label="item.name"
            :value="item._id"
            style="padding-right: 10px;"
          >{{ item.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" :formatter="dateFormat" label="创建时间"></el-table-column>
      <el-table-column prop="updatedAt" :formatter="dateFormat" label="最近修改时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="{ row }">
          <el-button type="text" size="small" @click="$router.push(`/articles/edit/${row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import dayjs from 'dayjs'

@Component({})
export default class ArticleList extends Vue {
  data = {}

  async fetch() {
    const res = await this.$http.get('articles')
    this.data = res.data
  }
  async remove(row) {
    this.$confirm(`是否确定删除文章 "${row.title}"`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(async () => {
        const res = await this.$http.delete(`articles/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
      .catch(() => {})
  }
  dateFormat(row, column) {
    const date = row[column.property]
    if (date == undefined) {
      return ''
    }
    return dayjs(date).format('YYYY/MM/DD HH:mm:ss')
  }
  created() {
    this.fetch()
  }
}
</script>
