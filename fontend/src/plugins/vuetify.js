import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'fa4' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
}

export default new Vuetify(opts)
