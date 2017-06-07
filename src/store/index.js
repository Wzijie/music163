import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 保存歌单数据
const songSheet = {
  namespaced: true,
  state: {
    // 推荐歌单
    recommendSongSheet: []
  },
  mutations: {
    // 添加推荐歌单
    addRecommendSongSheet (state, payload) {
      state.recommendSongSheet.push(...payload.data);
    }
  }
}

const currentPlaySong = {
  namespaced: true,
  state: {
    songList: [],
    songIndex: -1
  },
  mutations: {
    addSongList (state, payload) {
      state.songList.push(...payload.data);
    },
    changeSongIndex (state, payload) {
      state.songIndex = payload.data;
    }
  }
}

const store = new Vuex.Store({
  modules: {
    songSheet: songSheet,
    currentPlaySong: currentPlaySong
  }
});

export default store;
