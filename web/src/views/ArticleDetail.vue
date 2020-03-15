<template>
  <div class="article-detail fs-lg" v-if="article">
    <div class="article-title text-center pb-5 text-white">
      <h1 class="article-title_text m-0">{{ article.title }}</h1>
      <div class="article-meta">{{ article.createdAt | date }}</div>
      <div class="article-tags article-title_tags">
        <button class="VueJs">VueJs</button>
        <button class="Element">Element</button>
      </div>
    </div>
    <div class="line"></div>
    <div class="markdown-body line-numbers text-white" v-html="content"></div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import marked from 'marked'
import Prism from 'prismjs'
import '../assets/css/prism-onedark.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('YYYY / MM / DD')
    }
  },
  props: {
    id: { required: true }
  },
  data() {
    return {
      article: {},
      content: ''
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.article = res.data
      this.content = marked(res.data.content)
      this.timer = setTimeout(() => {
        Prism.highlightAll() // 这里加定时器让它后执行，不然没效果
      }, 0)
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0, 2.8125rem 2.8125rem 2.8125rem;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.markdown-body img {
  width: 100%;
}

.markdown-body a {
  border-bottom: none !important;
  background-color: transparent;
  color: #0366d6 !important;
  text-decoration: none;
}

.markdown-body a:hover {
  border-bottom: 1px solid #0366d6 !important;
}

.markdown-body a:active,
.markdown-body a:hover {
  outline-width: 0;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body code {
  margin: 0;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  background: #282c34;
}

.markdown-body pre {
  word-wrap: normal;
}

.markdown-body pre > code {
  margin: 0;
  padding: 0;
  border: 0;
  background: 0 0;
  white-space: pre;
  font-size: 100%;
  word-break: normal;
}

.markdown-body pre code {
  display: inline;
  overflow: visible;
  margin: 0;
  padding: 0;
  max-width: auto;
  border: 0;
  background-color: transparent;
  word-wrap: normal;
  line-height: inherit;
}

.line-numbers-rows {
  border-right: 1px solid #c5c5c5 !important;
}

.article-detail {
  font-weight: 400;
  background: #203342;
  line-height: 1.6875rem;
  margin: 0 0.75rem 0.75rem 0.75rem;
  padding: 2.8125rem;
  border-radius: 0.3125rem;
}

.article-title_text {
  font-size: 2rem;
  line-height: 2.3125rem;
  font-weight: 600;
  margin-bottom: 1.125rem;
}

.article-meta {
  opacity: 0.8;
}

.article-tags {
  margin: 1.125rem 0 0;
}

.VueJs {
  margin-left: 0 !important;
}

.line {
  border: 1px solid #1e3f5a;
  margin: 0 4.75rem 2.8125rem 4.75rem;
}
</style>
