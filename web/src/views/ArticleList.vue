<template>
  <div class="articles" width="100%">
    <div
      class="article-card content-box"
      v-for="item in articles"
      :key="item._id"
    >
      <div class="article-card_header">
        <!---->
      </div>
      <div class="article-card_content text-white">
        <div class="article-card_left">
          <router-link :to="`/articles/${item._id}`">
            <h2 class="article-card_title mt-0 text-white">{{ item.title }}</h2>
          </router-link>
          <p class="article-card_description m-0">{{ item.description }}</p>
        </div>
        <div class="article-card_right d-flex flex-column jc-start ai-start">
          <div class="article-meta article-card_meta">
            {{ item.createdAt | date }}
          </div>
          <div class="article-tags article-card_tags d-flex">
            <button class="VueJs">VueJs</button>
            <button class="Element">Element</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('YYYY / MM / DD')
    }
  },
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
.article-card {
  margin: 0 0.75rem 0.75rem 0.75rem;
  position: relative;
}

.content-box {
  margin-top: 0;
  padding: 1.4063rem 2.8125rem;
  background: #203342;
  border-radius: 0.3125rem;
}

.article-card_content {
  display: grid;
  grid-template-columns: 1fr 9.375rem;
}

.article-card_title {
  line-height: 2.125rem;
}

.article-card_description {
  line-height: 1.6875rem;
}

.article-card_right {
  margin-left: 0.5rem;
}

.article-card_left {
  padding-right: 12rem;
}

.article-tags {
  margin: 1.125rem 0 0;
}

.VueJs {
  margin-left: 0 !important;
}
</style>
