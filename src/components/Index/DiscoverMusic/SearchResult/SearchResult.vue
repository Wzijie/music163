<template>
  <div class="search-result" v-show='searchResultDisplay'>
    <FilterOption></FilterOption>
    <div class="result-display">
      <!-- <SongResultList :song-result='songResult' :link-song-play='linkSongPlay' :replace-keyword='replaceKeyword'></SongResultList> -->
      <!-- <SingerResultList :singer-result='singerResult'></SingerResultList> -->
      <AlbumResultList :album-result='albumResult'></AlbumResultList>
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ajaxRequest from '@/plugs/ajaxRequest';

import FilterOption from './FilterOption';
import SongResultList from './SongResultList';
import SingerResultList from './SingerResultList';
import AlbumResultList from './AlbumResultList';
export default {
  name: 'search-result',
  data () {
    return {
      type: '专辑',
      songResult: [],
      singerResult: [],
      albumResult: []
    }
  },
  computed: {
    ...mapState({
      // 确定搜索关键字
      submitSearchKeyword (state) {
        return state.SearchMessage.submitSearchKeyword;
      },
      // 搜索结果面板是否显示
      searchResultDisplay (state) {
        return state.SearchMessage.searchResultDisplay;
      }
    }),
    searchTypeParams () {
      return this.typeDistribution({
        song: 1,
        album: 10,
        singer: 100,
        songsheet: 1000,
        user: 1002,
        mv: 1004,
        lyric: 1006,
        radioStation: 1009
      });
    },
    requestResultHandler () {
      return this.typeDistribution({
        song: (data) => {
          this.songResult.splice(0, this.songResult.length, ...data.result.songs);
        }, 
        album: (data) => {
          this.albumResult.splice(0, this.albumResult.length, ...data.result.albums);
        },
        singer: (data) => {
          this.singerResult.splice(0, this.singerResult.length, ...data.result.artists);
        },
        songsheet: (data) => {
          
        },
        user: (data) => {
          
        },
        mv: (data) => {
          
        },
        lyric: (data) => {
          
        },
        radioStation: (data) => {
          
        }
      });
    }
  },
  watch: {
    // 关键字变动重新请求搜索结果
    submitSearchKeyword () {
      this.getSearchResult();
    }
  },
  components: {
    // 搜索结果筛选列表
    'FilterOption': FilterOption,
    'SongResultList': SongResultList,
    'SingerResultList': SingerResultList,
    'AlbumResultList': AlbumResultList
  },
  methods: {
    // 请求搜索结果
    getSearchResult () {
      var searchResultSuccess = (data) => {
        console.log(data, '搜索结果');
        this.requestResultHandler(data);
      }
      var searchResultError = (error) => {
        console.log(error);
      }
      var searchResultURL = `http://localhost:3000/search?keywords=${encodeURI(this.submitSearchKeyword)}&type=${this.searchTypeParams}`;
      ajaxRequest(searchResultURL, 'GET', searchResultSuccess, searchResultError);
    },
    // 请求歌曲详情
    getSongDetail (songId) {
      var songDetailSuccess = (data) => {
        console.log(data, '歌曲详情');
        this.$store.commit('MusicPlayer/addSongList', {
          data: data.songs
        });
        this.$store.commit('MusicPlayer/changeSongIndex', {
          data: this.$store.state.MusicPlayer.songList.length - 1
        });
      }
      var songDetailError = (error) => {
        console.log(error);
      }
      var songDetailURL = `http://localhost:3000/song/detail?ids=${songId}`;
      ajaxRequest(songDetailURL, 'GET', songDetailSuccess, songDetailError);
    },
    // 将字符中的关键字替换成高亮显示字体
    replaceKeyword (string) {
      // 字面量表示是这样 /关键字/g
      // 但字面量表示法不能用变量 比如 /关键字变量/g
      // 用构造函数新建 new RegExp(关键字变量, 'g'); 得到==> /关键字/g
      var reg = new RegExp(this.submitSearchKeyword, 'g');
      return string.replace(reg, `<span style='color: #527fb0'>${this.submitSearchKeyword}</span>`);
    },
    // 获取歌曲详情并跳转到播放器
    linkSongPlay (songId) {
      console.dir(songId);
      this.getSongDetail(songId);
      this.$router.push('/MusicPlayer');
    },
    typeDistribution (typeResult) {
      switch (this.type) {
        case '单曲':
          return typeResult.song;
        case '专辑':
          return typeResult.album;
        case '歌手':
          return typeResult.singer;
        case '歌单':
          return typeResult.songsheet;
        case '用户':
          return typeResult.user;
        case 'MV':
          return typeResult.mv;
        case '歌词':
          return typeResult.lyric;
        case '电台':
          return typeResult.radioStation;
      }
    }
  },
  mounted () {
    this.getSearchResult();
  }
}
</script>

<style scoped>
.search-result {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0.88rem; left: 0; bottom: 0; right: 0;
  z-index: 999;
  background: #fff;
}

.result-display {
  height: 100%;
  padding: 0 0 1rem 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
}


</style>

<style>
.result-list {
  height: 100%;
  overflow-y: scroll; 
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.result-list li {
  display: flex;
  align-items: center;
  text-align: left;
}

.most-result li {
  height: 1.2rem;
}

.most-result li div.cover {
  width: 1.08rem;
  min-width: 1.08rem;
  height: 1.08rem;
}

.most-result li a.info {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  margin-left: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}
</style>
