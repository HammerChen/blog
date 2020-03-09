<template>
  <div class="articles pa-3 mr-5">
    <v-row>
      <v-col v-for="item in articles" :key="item._id" md="12">
        <v-card :to="`/articles/${item._id}`" class="mx-auto" color="#1e3f5a">
          <v-card-text>
            <div class="display-1 text--primary">
              {{ item.title }}
            </div>
            <p>{{ item.createdAt | date }}</p>
            <div class="text--primary">
              {{ item.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('YYYY/MM/DD')
    }
  },
  async asyncData({ $axios }) {
    const articles = await $axios.$get('articles')
    return {
      articles
    }
  }
}
</script>

<style>
.articles {
  background-color: #1a222c !important;
  max-width: 100%;
  height: 100%;
}
</style>
