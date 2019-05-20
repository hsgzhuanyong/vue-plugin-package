import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import MainHeader from "./components/header.vue"
import MainFooter from "./components/footer.vue"
import "./assets/scss/reset.scss"

import "../packages/theme/index.scss"
import VCloudUi from "../packages/index.js"

Vue.use(VCloudUi)
Vue.config.productionTip = false
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
