// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import '!script-loader!jquery'
import '!style-loader!css-loader!animate.css/animate.min.css'
import '!style-loader!css-loader!font-awesome/css/font-awesome.min.css'
import store from './store'

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
})
