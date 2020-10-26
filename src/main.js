import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import './icons' // icon
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.less' // global css

import bubble from '@/directives/bubble'
Vue.directive('tuBubble', bubble)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
