<template>
  <div class="detail">
    <h1>{{ article.title }}</h1>

    <!-- eslint-disable-next-line -->
    <div class="markdown-body" v-html="content"></div>
  </div>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ params, $axios }) {
    const { id } = params
    const article = await $axios.$get(`articles/${id}`)
    return {
      id,
      article
    }
  },
  computed: {
    content() {
      return this.$md.render(this.article.content)
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.v-application code {
  box-shadow: none;
}

h1 {
  text-align: center;
  padding: 2.5rem;
  margin: 0;
}
</style>
