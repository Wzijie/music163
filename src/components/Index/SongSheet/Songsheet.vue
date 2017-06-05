<template>
  <div class="song-sheet">
    <BlurBg :songsheet-cover='songsheetCover'></BlurBg>
    <songsheetHeader :songsheet-cover='songsheetCover'></songsheetHeader>
    <SongsheetInfo :songsheet-data='songsheetData'></SongsheetInfo>
    <SongsheetOperation :songsheet-data='songsheetData'></SongsheetOperation>
    <SongList :songsheet-data='songsheetData'></SongList>
  </div>
</template>

<script>
import ajaxRequest from '@/plugs/ajaxRequest';

import BlurBg from './BlurBg';
import Header from './Header';
import SongsheetInfo from './SongsheetInfo';
import SongsheetOperation from './SongsheetOperation';
import SongList from './SongList';
export default {
  name: 'song-sheet',
  data () {
    return {
      songsheetData: {},
      songsheetCover: ''
    }
  },
  components: {
    'BlurBg': BlurBg,
    'songsheetHeader': Header,
    'SongsheetInfo': SongsheetInfo,
    'SongsheetOperation': SongsheetOperation,
    'SongList': SongList
  },
  computed: {
    songsheetDataReady: function () {
      var isReady = false;
      this.$store.state.recommendSongSheet.forEach((songsheet) => {
        if (songsheet.id === parseInt(this.$route.params.id)) {
          this.songsheetCover = songsheet.picUrl;
          isReady = true;
        }
      });
      return isReady;
    }
  },
  mounted: function () {
    // 歌单数据
    var songsheetSuccess = (data) => {
      console.log(data, '歌单数据');
      this.songsheetData = Object.assign({}, this.songsheetData, data.playlist);
      console.log(this.songsheetData);
    }
    var songsheetError = (error) => {
      console.log(error);
    }
    console.log(this.$route.params.id);
    var songsheetURL = `http://localhost:3000/playlist/detail?id=${this.$route.params.id}`;

    ajaxRequest(songsheetURL, 'GET', songsheetSuccess, songsheetError);

    if (!this.songsheetDataReady) {
      // 歌单封面
      var songsheetCoverSuccess = (data) => {
        console.log(data, '歌单封面');
        this.songsheetCover = data.data.cover;
      }
      var songsheetCoverError = (error) => {
        console.log(error);
      }
      var songsheetCoverURL = `http://localhost:3000/songsheetCover?id=${this.$route.params.id}`;

      ajaxRequest(songsheetCoverURL, 'GET', songsheetCoverSuccess, songsheetCoverError);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-sheet {
  position: relative;
  padding-top: 0.88rem;
}
</style>
