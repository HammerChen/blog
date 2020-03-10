<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped width="360px;">
      <div class="author_info">
        <img src="/avatar.png" />
        <h1>陈小锤</h1>
        <p>
          Hi 👋🏼 I'm Hammer, a nomad Software Engineer.I write tutorials for
          JavaScript and sometimes I take awesome pictures 🌅!
        </p>
        <div class="copyright">
          <span>
            Copyright © 2020 陈小锤
          </span>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="top_bar">
      <div class="home">
        <span class="title">陈小锤的博客</span>
        <v-icon large @click="$router.push('/')">mdi-home</v-icon>
      </div>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt-child />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
}
</script>

<style scoped>
.top_bar {
  box-shadow: none;
  background-color: #ffffff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.home {
  display: inline-block;
  margin: auto 70px;
}

.title {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.author_info {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center; /*垂直居中*/
  align-content: center;
  margin: 0 auto;
  text-align: center;
  height: 700px;
  padding: 60px 15px 15px 15px;
}

p {
  margin-bottom: 1.25em;
  font-size: 18px;
  opacity: 0.6;
  white-space: 2.5rem;
  width: 260px;
  flex-basis: 200px;
  flex: 1;
}

.copyright {
  justify-content: center;
  font-size: 15px;
}

img {
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 100%;
  width: 130px;
  height: 130px;
  margin-bottom: 1.5em;
}

h1 {
  padding: 0;
  margin-bottom: 1.5rem;
}
</style>
