<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      class="side"
      app
      clipped
      floating
      width="300px;"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
  background-color: #1a222c !important;
  box-shadow: none;
}

.side {
  background-color: #1a222c !important;
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
