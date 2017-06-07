<template>
  <div class="song-list">
    <p class="loading-text" v-if='loading'>正在加载...</p>
    <ul v-else>
      <li class="play-all">
        <span class="song-order">
          <i class="icon-play"></i>
        </span>
        <div class="song-info">
          <a href="###">
            <p>播放全部<span class="song-count">(共{{ songsheetData.trackCount }}首)</span></p>
          </a>
          <span class="song-detail">
            <i class="icon-detail"></i>
          </span>
        </div>
      </li>
      <li v-for='(song, index) in songsheetData.tracks'>
        <span class="song-order">{{ index + 1 }}</span>
        <div class="song-info">
          <a @click='toMusicPlayer(index)'>
            <p class="song-name text-overflow">{{ song.name }}</p>
            <p class="song-author-info text-overflow">{{ singerName(song.ar) }} - {{ song.al.name }}</p>
          </a>
          <span class="song-detail">
            <i class="icon-detail"></i>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import singerNameMerge from '@/plugs/singerNameMerge';
export default {
  name: 'song-list',
  props: [ 'songsheetData' ],
  data () {
    return {
      
    }
  },
  computed: {
    loading: function () {
      return Object.keys(this.songsheetData).length === 0;
    }
  },
  methods: {
    // singerArr: ['作者a','作者b','作者c']
    // 转换成： '作者a/作者b/作者c
    singerName: function (singerArr) {
      return singerNameMerge(singerArr);
    },
    // 跳转到音乐播放页
    toMusicPlayer: function (songIndex) {
      this.addCurrentSongList();
      this.changeCurrentSongIndex(songIndex);
      this.$router.push('/MusicPlayer');
    },
    // 添加歌曲列表
    addCurrentSongList: function () {
      this.$store.commit('currentPlaySong/addSongList', {
        data: this.songsheetData.tracks
      });
    },
    // 改变当前播放歌曲的索引
    changeCurrentSongIndex: function (songIndex) {
      this.$store.commit('currentPlaySong/changeSongIndex', {
        data: songIndex
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-list {
  padding-bottom: 1rem;
}
.song-list ul li {
  display: flex;
  align-items: center;
  height: 1rem;
  box-sizing: border-box;
}

.song-list ul li span.song-order {
  display: inline-block;
  width: 0.85rem;
  min-width: 0.85rem;
  font-size: 0.32rem;
  color: #999;
}

.song-list ul li.play-all span.song-order .icon-play {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: url('../../../assets/images/icon-play.png') no-repeat;
  background-size: cover;
}

.song-list ul li.play-all .song-info a {
  line-height: 1rem;
}

.song-list ul li.play-all .song-info a p .song-count {
  font-size: 0.28rem;
  color: #999;
}

.song-list ul li .song-info {
  display: flex;
  width: 6.65rem;
  height: 100%;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
  text-align: left;
}

.song-list ul li .song-info a {
  display: inline-block;
  width: 5.65rem;
  height: 100%;
}

.song-list ul li .song-info a .song-name {
  font-size: 0.3rem;
  margin: 0.08rem 0;
}

.song-list ul li .song-info a .song-author-info {
  font-size: 0.24rem;
  color: #999;
}
 
.song-list ul li .song-info .song-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 100%;
}

.song-list ul li .song-info .song-detail .icon-detail {
  display: inline-block;
  width: 0.4rem;
  height: 0.1rem;
  background: url('../../../assets/images/icon-detail.png') no-repeat;
  background-size: cover;
}
</style>
