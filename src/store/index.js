import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recommendSongSheet: []
  },
  mutations: {
    loadRecommendSongSheet (state, payload) {
      state.recommendSongSheet.push(...payload.recommendSongSheetList);
    }
  }
});

export default store;
