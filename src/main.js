// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css
import './icons' // icon

import bubble from 'tiny-utils.js/directives/bubble'
Vue.directive('tuBubble', bubble)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
