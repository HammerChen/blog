<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}文章</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="标签"></el-form-item>
      <el-form-item>
        <el-select v-model="model.tags" multiple placeholder="选择标签(可多选)">
          <el-option v-for="item in tags" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容"></el-form-item>
      <el-form-item>
        <div class="editor">
          <mavon-editor v-model="model.content" style="height: 100%"></mavon-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{ id ? '保存' : '提交' }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  props: {
    id: {}
  },
  components: {
    mavonEditor
  },
  data() {
    return {
      tags: [],
      model: {}
    }
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchTags() {
      const res = await this.$http.get('rest/tags')
      this.tags = res.data
    }
  },
  created() {
    this.fetchTags()
    this.id && this.fetch()
  }
}
</script>

<style>
.editor {
  height: 580px;
}
</style>
