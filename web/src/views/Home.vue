<template>
  <div>
    {{ articles }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: {}
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('articles')
      this.articles = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style></style>
