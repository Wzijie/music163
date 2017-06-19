<template>
  <div class="search-result" v-show='searchResultDisplay'>
    <FilterOption :search-filter-index='searchFilterIndex'></FilterOption>
    <div class="result-display" :style='{ transform: resultBoxTranslate }'>
      <SongResultList :song-result='songResult' :link-song-play='linkSongPlay' :replace-keyword='replaceKeyword'></SongResultList>
      <SingerResultList :singer-result='singerResult' :replace-keyword='replaceKeyword'></SingerResultList>
      <AlbumResultList :album-result='albumResult' :replace-keyword='replaceKeyword'></AlbumResultList>
      <SongsheetResultList :songsheet-result='songsheetResult' :replace-keyword='replaceKeyword'></SongsheetResultList>
      <mvResultList :mv-result='mvResult'  :replace-keyword='replaceKeyword'></mvResultList>
      <RadioStationResultList :radio-station-result='radioStationResult' :radio-station-programs-result='radioStationProgramsResult' :replace-keyword='replaceKeyword'></RadioStationResultList>
      <UserResultList :user-result='userResult' :replace-keyword='replaceKeyword'></UserResultList>
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
import SongsheetResultList from './SongsheetResultList';
import MvResultList from './MvResultList';
import RadioStationResultList from './RadioStationResultList';
import UserResultList from './UserResultList';
export default {
  name: 'search-result',
  data () {
    return {
      // type: '歌单',
      songResult: [],
      singerResult: [],
      albumResult: [],
      songsheetResult: [],
      mvResult: [],
      radioStationResult: [],
      radioStationProgramsResult: [],
      userResult: []
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
      },
      // 搜索类型
      searchType (state) {
        return state.SearchMessage.searchType;
      },
      // 搜索类型筛选的索引
      searchFilterIndex (state) {
        return state.SearchMessage.searchFilterIndex;
      }
    }),
    // 搜索类型关键字对应的请求数据地址参数
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
    // 搜索结果的处理方法
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
          this.songsheetResult.splice(0, this.songsheetResult.legnth, ...data.result.playlists);
        },
        user: (data) => {
          this.userResult.splice(0, this.userResult.length, ...data.result.userprofiles);
        },
        mv: (data) => {
          this.mvResult.splice(0, this.mvResult.length, ...data.result.mvs);
        },
        lyric: (data) => {
          
        },
        radioStation: (data) => {
          this.radioStationResult.splice(0, this.radioStationResult.length, ...data.result.djRadios);
          this.radioStationProgramsResult.splice(0, this.radioStationProgramsResult.length, ...data.result.djprograms);
        }
      });
    },

    resultBoxTranslate () {
      return `translateX(-${this.searchFilterIndex * 7.5}rem)`;
    }
  },
  watch: {
    // 关键字变动重新请求搜索结果
    submitSearchKeyword () {
      this.clearResult();
      this.getSearchResult();
    },
    searchType () {
      this.getSearchResult();
    }
  },
  components: {
    // 搜索结果筛选列表
    'FilterOption': FilterOption,

    'SongResultList': SongResultList,
    'SingerResultList': SingerResultList,
    'AlbumResultList': AlbumResultList,
    'SongsheetResultList': SongsheetResultList,
    'MvResultList': MvResultList,
    'RadioStationResultList': RadioStationResultList,
    'UserResultList': UserResultList
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
    // 根据 type 状态返回相应的内容
    typeDistribution (typeResult) {
      switch (this.searchType) {
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
        case '主播电台':
          return typeResult.radioStation;
      }
    },
    clearResult () {
      this.songResult.splice(0, this.songResult.length);
      this.singerResult.splice(0, this.singerResult.length);
      this.albumResult.splice(0, this.albumResult.length);
      this.songsheetResult.splice(0, this.songsheetResult.length);
      this.mvResult.splice(0, this.mvResult.length);
      this.radioStationResult.splice(0, this.radioStationResult.length);
      this.radioStationProgramsResult.splice(0, this.radioStationProgramsResult.length);
      this.userResult.splice(0, this.userResult.length);
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
  display: flex;
  width: 700%;
  height: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s ease;
}


</style>

<style>
.result-list {
  width: 7.5rem;
  min-width: 7.5rem;
  height: 100%;
  overflow-y: scroll; 
  padding-left: 0.2rem;
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
  align-content: center;
  flex-wrap: wrap;
  flex: 1;
  height: 100%;
  margin-left: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
  overflow: hidden;
}

.most-result li a.info p {
  width: 100%;
  margin: 0.05rem 0;
}

.most-result li a.info p.title {
  font-size: 0.32rem;
}

.most-result li a.info p.detail-info {
  font-size: 0.26rem;
  color: #7d7d7f;
}
</style>
