<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}文章</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="标题">
        <el-input v-model="data.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="data.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 0;" label="标签"></el-form-item>
      <el-form-item>
        <el-select v-model="data.tags" multiple style="width: 100%;" placeholder="选择标签(可多选)">
          <el-option v-for="item in tags.data" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin-bottom: 0;" label="内容"></el-form-item>
      <el-form-item>
        <div class="editor">
          <mavon-editor ref="md" @imgAdd="$imgAdd" v-model="data.content" style="height: 100%"></mavon-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">
          {{
          id ? '保存' : '提交'
          }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class ArticleEdit extends Vue {
  @Prop(String) id!: string
  data = {}
  tags = []

  async save() {
    let res
    if (this.id) {
      res = await this.$http.put(`articles/${this.id}`, this.data)
    } else {
      res = await this.$http.post('articles', this.data)
    }
    this.$router.push('/articles/list')
    this.$message.success('保存成功')
  }
  async fetch() {
    const res = await this.$http.get(`articles/${this.id}`)
    this.data = res.data
  }
  async fetchTags() {
    const res = await this.$http.get('tags')
    this.tags = res.data
  }
  async $imgAdd(pos, $file) {
    const formdata = new FormData()
    formdata.append('file', $file)
    const res = await this.$http.post('upload', formdata)
    const ref: any = this.$refs.md
    ref.$img2Url(pos, res.data.url)
  }
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
