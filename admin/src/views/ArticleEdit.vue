<template>
  <div>
    <h3>新建文章</h3>
    <el-form style="padding-right: 18px;" @submit.native.prevent="create">
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
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async create() {
      const res = await this.$http.post('articles', this.model)
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    }
  }
}
</script>

<style></style>
