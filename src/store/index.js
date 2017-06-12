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
    // 歌曲播放列表
    songList: [],
    // 当前播放歌曲的索引
    songIndex: -1,
    // 是否暂停
    pause: null,
    // 音量
    volume: 1,
    // 是否静音
    muted: false,
    // 是否显示音乐播放列表组件
    isSongPlayListShow: false
  },
  mutations: {
    // 替换歌曲播放列表的歌曲
    addSongList (state, payload) {
      state.songList.splice(0, state.songList.length, ...payload.data);
    },
    // 改变歌曲索引
    changeSongIndex (state, payload) {
      if (payload.data >= state.songList.length || payload.data < 0) {
        return;
      }
      state.songIndex = payload.data;
    },
    // 改变播放状态
    changePlayState (state, payload) {
      state.pause = payload.data;
    },
    // 改变音量
    changeVolume (state, payload) {
      state.volume = payload.data;
    },
    // 改变是否静音
    changeMuted (state, payload) {
      state.muted = payload.data;
    },
    // 改变是否显示音乐播放列表组件
    isSongPlayListShowChange (state) {
      state.isSongPlayListShow = !state.isSongPlayListShow
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
