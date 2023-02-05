import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from '@/utils/request.js'
import less from 'less'



import ECharts from './utils/echarts'
// import china from '../node_modules/echarts/map/js/china.js'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
Vue.prototype.$axios = axios
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios,ElementUI)
Vue.use(ElementUI, less, ECharts, axios)


Vue.config.productionTip = false

import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue'
Vue.component('Footer', Footer)
Vue.component('Search', Search)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')