<template>
  <v-app>
    <v-app-bar color="blue accent-4" dense dark app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <transition>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one':
          return { color: 'success', icon: 'mdi-share-variant' }
        case 'two':
          return { color: 'red', icon: 'mdi-pencil' }
        case 'three':
          return { color: 'green', icon: 'mdi-chevron-up' }
        default:
          return {}
      }
    }
  }
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>
