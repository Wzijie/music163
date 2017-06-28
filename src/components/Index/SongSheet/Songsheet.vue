<template>
  <div class="song-sheet">
    <BlurBg :cover='songsheetCover'></BlurBg>
    <SongsheetHeader :songsheet-cover='songsheetCover' title='歌单'></SongsheetHeader>
    <SongsheetInfo :songsheet-data='songsheetData'  :songsheet-cover='songsheetCover'></SongsheetInfo>
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
      songsheetCover: 'static/default-img.png'
    }
  },
  components: {
    'BlurBg': BlurBg,
    'SongsheetHeader': Header,
    'SongsheetInfo': SongsheetInfo,
    'SongsheetOperation': SongsheetOperation,
    'SongList': SongList
  },
  computed: {
    // 判断store是否已有歌单数据，如果已经有数据则直接使用
    songsheetDataReady: function () {
      var isReady = false;
      this.$store.state.songSheet.recommendSongSheet.forEach((songsheet) => {
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
    }
    var songsheetError = (error) => {
      console.log(error);
    }
    console.log(this.$route.params.id);
    var songsheetURL = `http://119.23.246.148:3001/playlist/detail?id=${this.$route.params.id}`;

    ajaxRequest(songsheetURL, 'GET', songsheetSuccess, songsheetError);

    // 如果store没有数据再请求歌单封面
    if (!this.songsheetDataReady) {
      // 歌单封面
      var songsheetCoverSuccess = (data) => {
        console.log(data, '歌单封面');
        this.songsheetCover = data.data.cover;
      }
      var songsheetCoverError = (error) => {
        console.log(error);
      }
      var songsheetCoverURL = `http://119.23.246.148:3001/songsheetCover?id=${this.$route.params.id}`;

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
