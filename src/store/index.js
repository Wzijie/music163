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

const MusicPlayer = {
  namespaced: true,
  state: {
    songList: [],
    songIndex: -1,
    pause: null,
    volume: 1,
    muted: false
  },
  mutations: {
    addSongList (state, payload) {
      state.songList.push(...payload.data);
    },
    changeSongIndex (state, payload) {
      if (payload.data >= state.songList.length || payload.data < 0) {
        return;
      }
      state.songIndex = payload.data;
    },
    changePlayState (state, payload) {
      state.pause = payload.data;
    },
    changeVolume (state, payload) {
      state.volume = payload.data;
    },
    changeMuted (state, payload) {
      state.muted = payload.data;
    }
  }
}

const store = new Vuex.Store({
  modules: {
    songSheet: songSheet,
    MusicPlayer: MusicPlayer
  }
});

export default store;
