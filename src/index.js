import Vue from "vue/dist/vue.js";
import icon from "./assets/image/iconfont.css";
import css from "./assets/style/base.less";
import vuebody from "./components/resume.vue";
import "./index.html";

new Vue({
  render: (h) => h(vuebody)
}).$mount('#app');