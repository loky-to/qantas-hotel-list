import Vue from 'vue'
import HotelPage from './HotelPage.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(HotelPage)
}).$mount('#app')
