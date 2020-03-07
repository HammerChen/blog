<template>
  <div>
    <h3>{{ id ? '编辑' : '新建' }}管理员</h3>
    <el-form style="margin-right: 18px;" @submit.native.prevent="create">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{
          id ? '保存' : '提交'
        }}</el-button>
        <el-button @click="$router.push('/admin_users/list')">返回</el-button>
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
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>

<style></style>
