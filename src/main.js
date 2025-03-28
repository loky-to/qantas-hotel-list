import Vue from 'vue';
import HotelPage from './HotelPage.vue';
import store from './store';
import './scss/_style.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  store,
  render: (h) => h(HotelPage),
}).$mount('#app');
