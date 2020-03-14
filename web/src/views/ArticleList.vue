<template>
  <div class="posts" width="100%">
    <div class="post-card content-box">
      <div class="post-card_header">
        <!---->
      </div>
      <div
        class="post-card_content text-white"
        v-for="item in articles"
        :key="item._id"
      >
        <div>
          <h2 class="post-card_title ">{{ item.title }}</h2>
          <p class="post-card_description">{{ item.description }}</p>
        </div>
        <div class="post-card_right">
          <div class="post-meta post-card_meta">{{ item.createdAt }}</div>
          <div class="post-tags post-card_tags">{{ item.tags }}</div>
        </div>
      </div>
    </div>
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

<style>
.post-card {
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
  margin-left: 0.625rem;
  position: relative;
}

.content-box {
  margin-top: 0;
  padding: 1.4063rem 2.8125rem;
  background: #203342;
  border-radius: 0.3125rem;
}
</style>
