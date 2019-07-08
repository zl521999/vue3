import Vue from "vue"

import App from "./App.vue"

import router from "./router"

import Header from "./components/Header/Header.vue"

import Star from "./components/Star/Star.vue"

import ajax from "./api/ajax"

import store from "./vuex/store"

Vue.prototype.$ajax=ajax

//注册全局组件---可以在任何页面中使用
Vue.component("Header",Header)
Vue.component("Star",Star)

new Vue({
  el: "#app",
  //配置--简写
  //render:createElement=>createElement(App)
  render: h => h(App),//App
  router,//配置路由器
  store//配置vuex
})
