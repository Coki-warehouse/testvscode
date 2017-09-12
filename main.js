// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Select, Option } from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

import './utils/rem'
import './assets/styles/reboot.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(infiniteScroll)
Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

// window.addEventListener('hashchange', () => {
//   this.transitionTo(function () {
//     console.log(3)
//   })
// })
