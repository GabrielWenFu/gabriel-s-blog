// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { device } from 'common/js/util.js'
import fastclick from 'fastclick'
import store from 'store'

Vue.config.productionTip = false

var clientWidth = document.documentElement.clientWidth
if (!device.isPC()) {
  if (clientWidth > 420) {
    clientWidth = 420
  }
  document.body.style.maxWidth = '420px'
  document.body.style.margin = '0 auto'
  document.documentElement.style.fontSize = clientWidth / 3.75 + 'px'
}

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
