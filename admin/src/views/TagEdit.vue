<template>
  <div>
    <h3>{{ id ? '编辑' : '新建' }}标签</h3>
    <el-form style="margin-right: 18px;" @submit.native.prevent="create">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{
          id ? '保存' : '提交'
        }}</el-button>
        <el-button @click="$router.push('/tags/list')">返回</el-button>
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
        res = await this.$http.put(`rest/tags/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/tags', this.model)
      }
      this.$router.push('/tags/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/tags/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>

<style></style>
