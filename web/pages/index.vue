<template>
  <div class="articles">
    <v-row>
      <v-col v-for="item in articles" :key="item._id" md="12">
        <v-card
          :to="`/articles/${item._id}`"
          class="mx-auto"
          style="box-shadow: none;"
          min-width="414px"
        >
          <v-card-text>
            <div class="display-1 text--primary">
              <h5>{{ item.title }}</h5>
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
  height: 100%;
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .articles {
    padding: 15px;
  }
}
</style>
