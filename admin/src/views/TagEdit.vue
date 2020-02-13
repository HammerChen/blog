<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}标签</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="标签名称">
        <el-input v-model="data.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="data.description" type="textarea"></el-input>
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
export default class TagEdit extends Vue {
  @Prop(String) id!: string
  data = {}

  async save() {
    let res
    if (this.id) {
      res = await this.$http.put(`tags/${this.id}`, this.data)
    } else {
      res = await this.$http.post('tags', this.data)
    }
    this.$router.push('/tags/list')
    this.$message({
      type: 'success',
      message: '保存成功'
    })
  }
  async fetch() {
    const res = await this.$http.get(`tags/${this.id}`)
    this.data = res.data
  }

  created() {
    this.id && this.fetch()
  }
}
</script>
