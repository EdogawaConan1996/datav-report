import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Echarts from 'echarts'
import './plugins/element'
import VueEcharts from 'vue-echarts'

import './assets/styles/common.scss'

Vue.prototype.$echarts = Echarts

Vue.component('v-chart', VueEcharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
