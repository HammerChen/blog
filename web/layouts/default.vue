<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      class="side"
      app
      clipped
      width="300px;"
    >
      <div class="author_info">
        <img src="/avatar.png" />
        <h1>陈小锤</h1>
        <p>
          Hi 👋🏼 I'm Hammer, a nomad Software Engineer.I write tutorials for
          JavaScript and sometimes I take awesome pictures 🌅!
        </p>
        <span class="copyright">
          Copyright © 2020 陈小锤
        </span>
      </div>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="top-bar">
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
  }),
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style>
.top-bar {
  background-color: #141921 !important;
  box-shadow: none;
}

.side {
  background-color: #141921 !important;
}

.author_info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; /*垂直居中*/
  align-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 45px 15px 15px 15px;
}

.copyright {
  display: flex;
  justify-content: center;
  font-size: 15px;
}

img {
  border-radius: 100%;
  width: 130px;
  height: 130px;
  margin-bottom: 1.5em;
  background-color: #ffffff;
}

h1 {
  margin: 0 0 1em 0;
}

p {
  display: block;
  margin-bottom: 1.25em;
  font-size: 18px;
  opacity: 0.6;
  white-space: 2.5rem;
  width: 260px;
}

.v-navigation-drawer__border {
  width: 0;
}

html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  height: 100%;
  width: calc(100vw + 18px);
  overflow: auto;
}
</style>
