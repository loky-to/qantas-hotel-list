import Vue from 'vue';
import Vuex from 'vuex';
import data from '../mock/data.json';
// import data1 from '../mock/editedData.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: data.results,
    sortOrder: 'ASC', // Default sorting to "ASC" (Low to High)
  },
  getters: {
    sortedHotels(state) {
      return [...state.hotels].sort((a, b) => {
        if (state.sortOrder === 'ASC') {
          return a.offer.displayPrice.amount - b.offer.displayPrice.amount;
        } else {
          return b.offer.displayPrice.amount - a.offer.displayPrice.amount;
        }
      });
    },
  },
  mutations: {
    setSortOrder(state, newOrder) {
      if (state.sortOrder !== newOrder) {
        state.sortOrder = newOrder;
      }
    },
    setHotels(state, hotels) {
      state.hotels = hotels;
    },
  },
  actions: {
    updateSortOrder({ commit }, newOrder) {
      commit('setSortOrder', newOrder);
      console.log('sort order updated to ', newOrder);
    },
    updateHotels({ commit }, hotels) {
      commit('setHotels', hotels);
    },
  },
  modules: {},
});
