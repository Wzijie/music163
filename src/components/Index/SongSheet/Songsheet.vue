<template>
  <div class="song-sheet">
    <BlurBg></BlurBg>
    <songsheetHeader></songsheetHeader>
    <SongsheetInfo></SongsheetInfo>
    <SongsheetOperation></SongsheetOperation>
    <SongList></SongList>
    <p>{{$route.params.id}}</p>
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
      
    }
  },
  components: {
    'BlurBg': BlurBg,
    'songsheetHeader': Header,
    'SongsheetInfo': SongsheetInfo,
    'SongsheetOperation': SongsheetOperation,
    'SongList': SongList
  },
  mounted: function () {
    var songsheetSuccess = (data) => {
      console.log(data);
    }
    var songsheetError = (error) => {
      console.log(error);
    }
    console.log(this.$route.params.id);
    var songsheetURL = `http://localhost:3000/playlist/detail?id=${this.$route.params.id}`;
    console.log(songsheetURL);
    ajaxRequest(songsheetURL, 'GET', songsheetSuccess, songsheetError);
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
