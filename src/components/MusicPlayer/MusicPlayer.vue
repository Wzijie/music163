<template>
  <div class="music-player">
    <div class="blur-img" :style='{ "background-image": `url(${songAlbumCover})` }'></div>
    <musicPlayerHeader :current-song='currentSong'></musicPlayerHeader>
    <SongCover :song-album-cover='songAlbumCover'></SongCover>
    <SongOperation></SongOperation>
    <AudioControl :song-url='songUrl'></AudioControl>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ajaxRequest from '@/plugs/ajaxRequest';

import Header from './Header';
import SongCover from './SongCover';
import SongOperation from './SongOperation';
import AudioControl from './AudioControl';
export default {
  name: 'music-player',
  data () {
    return {
      songUrl: ''
    }
  },
  components: {
    'musicPlayerHeader': Header,
    'SongCover': SongCover,
    'SongOperation': SongOperation,
    'AudioControl': AudioControl
  },
  computed: {
    ...mapState({
      // 歌曲列表
      songList (state) {
        return state.currentPlaySong.songList;
      },
      // 歌曲索引
      songIndex (state) {
        return state.currentPlaySong.songIndex;
      }
    }),
    // 当前歌曲
    currentSong () {
      return this.songList[this.songIndex];
    },
    // 歌曲专辑封面
    songAlbumCover () {
      return this.currentSong.al.picUrl;
    }
  },
  methods: {
    // 获取歌曲资源url
    getSongURL (songId) {
      var getSongSuccess = (data) => {
        console.log(data);
        this.songUrl = data.data[0].url;
      }
      var getSongError = (error) => {
        console.log(error);
      }
      var getSongRequestURL = `http://localhost:3000/music/url?id=${songId}`;
      ajaxRequest(getSongRequestURL, 'GET', getSongSuccess, getSongError);
    }
  },
  mounted () {
    console.log(this.currentSong);
    this.getSongURL(this.currentSong.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music-player {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0,0,0,0.5);
}

.music-player .blur-img {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: url('http://p4.music.126.net/xKDBkJJm78xWnHBEQcKxcQ==/109951162935702655.jpg?param=200y200');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(0.2rem);
  z-index: -1;
}

</style>
