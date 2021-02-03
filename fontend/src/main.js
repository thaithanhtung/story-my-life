// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import DateRangePicker from 'vue2-daterange-picker'
// you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// import VueApollo from 'vue-apollo'

import vuetify from '@/plugins/vuetify'
import Vuex from 'vuex'
import 'es6-promise/auto'

import App from './App'
import router from './router'

// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// })
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
//   connectToDevTools: true
// })

// Vue.use(VueApollo)

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient
// })

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App, DateRangePicker },
  // apolloProvider,
  template: '<App/>'
})
