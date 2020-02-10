<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="model.content" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{id ? '保存' : '提交'}}</el-button>
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
    async save() {
      let res
      if (this.id) {
        res = await this.$http.put(`articles/${this.id}`, this.model)
      } else {
        res = await this.$http.post('articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>
