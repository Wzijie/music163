<template>
  <div class="search-result" v-show='searchResultDisplay'>
    <FilterOption></FilterOption>
    <div class="result-display">
      <ul class="song-result">
        <li v-for='song in searchResult'>
          <a @click='linkSongPlay(song.id)'>
            <p class="song-name text-overflow" v-html='replaceKeyword(replaceKeyword(song.name))'></p>
            <p class="song-author-album text-overflow">
              <i class="icon icon-sq"></i>
              <span class="author" v-html='replaceKeyword(song.artists[0].name)'></span> 
              - 
              <span class="album" v-html='replaceKeyword(song.album.name)'></span></p>
          </a>
          <div class="detail">
            <i class="icon icon-detail translate-center"></i>
          </div>
        </li>
      </ul>
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ajaxRequest from '@/plugs/ajaxRequest';
import FilterOption from './FilterOption';
export default {
  name: 'search-result',
  data () {
    return {
      searchResult: []
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
    })
  },
  watch: {
    // 关键字变动重新请求搜索结果
    submitSearchKeyword () {
      this.searchResult.splice(0, this.searchResult.length);
      this.getSearchResult();
    }
  },
  components: {
    // 搜索结果筛选列表
    'FilterOption': FilterOption
  },
  methods: {
    // 请求搜索结果
    getSearchResult () {
      var searchResultSuccess = (data) => {
        console.log(data, '搜索结果');
        this.searchResult.push(...data.result.songs);
      }
      var searchResultError = (error) => {
        console.log(error);
      }
      var searchResultURL = `http://localhost:3000/search?keywords=${encodeURI(this.submitSearchKeyword)}`;
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

.song-result {
  height: 100%;
  overflow-y: scroll; 
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.song-result li {
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #ccc;
  text-align: left;
}

.song-result li a {
  display: block;
  width: 100%;
  padding: 0.05rem 0;
  overflow: hidden;
}

.song-result li a p {
  margin: 0.05rem 0;
}

.song-result li a .song-author-album {
  font-size: 0.24rem;
  color: #666;
}

.song-result li .detail {
  width: 0.95rem;
  min-width: 0.95rem;
  height: 1rem;
  position: relative;
}

.icon-sq {
  width: 0.24rem;
  height: 0.16rem;
  background-image: url('../../../../assets/images/icon-sq.png');
}
</style>
