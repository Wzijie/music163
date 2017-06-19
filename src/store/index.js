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

// 播放器
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
    isSongPlayListShow: false,
    // 播放模式
    playMode: 'listLoop'
  },
  mutations: {
    // 替换歌曲播放列表的歌曲
    addSongList (state, payload) {
      state.songList.push(...payload.data);
    },
    clearSongList (state) {
      state.songList.splice(0, state.songList.length);
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
    },

    // 改变播放模式
    changePlayMode (state) {
      if (state.playMode === 'listLoop') {
        state.playMode = 'oneSongLoop';
        return;
      } 
      if (state.playMode === 'oneSongLoop') {
        state.playMode = 'randomPlay';
        return;
      }
      if (state.playMode === 'randomPlay') {
        state.playMode = 'listLoop';
        return;
      }
    },

    // 删除歌曲
    deleteSong (state, payload) {
      state.songList.splice(payload.data, 1);
    }
  }
}

// 搜索
const SearchMessage = {
  namespaced: true,
  state: {
    // 搜索表单是否获取焦点
    searchInputFocus: false,
    // 输入的搜索关键字
    keyword: '',
    // 搜索结果是否显示
    searchResultDisplay: false,
    // 确定搜索关键字
    submitSearchKeyword: '',
    // 搜索类型
    searchType: '单曲',
    // 搜索筛选类型索引
    searchFilterIndex: 0
  },
  mutations: {
    // 改变搜索表单是否获取焦点
    changeSearchInputFocus (state, payload) {
      state.searchInputFocus = payload.data;
    },
    // 改变搜索关键字
    changeKeyword (state, payload) {
      state.keyword = payload.data;
    },
    // 改变搜索结果是否显示
    changeSearchResultDisplay (state, payload) {
      state.searchResultDisplay = payload.data;
    },
    // 改变确定的搜索关键字
    changeSubmitSearchKeyword (state, payload) {
      state.submitSearchKeyword = payload.data;
    },
    // 改变搜索类型
    changeSearchType (state, payload) {
      state.searchType = payload.data;
    },
    // 改变搜索筛选类型的索引
    changeSearchFilterIndex (state, payload) {
      state.searchFilterIndex = payload.data;
    }
  }
}

const store = new Vuex.Store({
  modules: {
    songSheet: songSheet,
    MusicPlayer: MusicPlayer,
    SearchMessage: SearchMessage
  }
});

export default store;
