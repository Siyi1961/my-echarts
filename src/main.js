import Vue from 'vue'
import App from './App.vue'
import router from './router'
//这一行：
import echarts from 'echarts'
//和这一行：
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
