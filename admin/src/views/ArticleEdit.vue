<template>
  <div>
    <h3>{{ id ? '编辑' : '新建' }}文章</h3>
    <el-form style="margin-right: 18px;" @submit.native.prevent="create">
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="model.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{
          id ? '保存' : '提交'
        }}</el-button>
        <el-button @click="$router.push('/')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async create() {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>

<style></style>
