import 'babel-polyfill'
import Vue from "vue/dist/vue.js";
import App from './App.vue'
import icon from "./assets/image/iconfont.css";
import css from "./assets/style/base.less";
import router from './router'
import './icons'
import "./index.html";

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})