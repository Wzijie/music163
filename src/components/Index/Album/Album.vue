<template>
  <div class="album">
    <BlurBg :cover='albumCover'></BlurBg>
    <SongsheetHeader :songsheet-cover='albumCover' title='专辑'></SongsheetHeader>
    <AlbumInfo :album-data='albumData'  :album-cover='albumCover'></AlbumInfo>
    <SongsheetOperation :songsheet-data='albumData'></SongsheetOperation>
  </div>
</template>

<script>
import ajaxRequest from '@/plugs/ajaxRequest';

import BlurBg from '@/components/Index/SongSheet/BlurBg';
import Header from '@/components/Index/SongSheet/Header';
import AlbumInfo from './AlbumInfo';
import SongsheetOperation from '@/components/Index/SongSheet/SongsheetOperation';
import SongList from '@/components/Index/SongSheet/SongList';
export default {
  name: 'album',
  data () {
    return {
      albumData: {},
      albumCover: 'static/default-img.png'
    }
  },
  components: {
    'BlurBg': BlurBg,
    'SongsheetHeader': Header,
    'AlbumInfo': AlbumInfo,
    'SongsheetOperation': SongsheetOperation,
    'SongList': SongList
  },
  mounted () {
    var albumDataSuccess = (data) => {
      console.log(data);
      this.albumData = Object.assign({}, this.albumData, data.album);
      this.albumCover = data.album.picUrl;
    }
    var albumDataError = (error) => {
      console.log(error);
    }
    var albumDataURL = `http://119.23.246.148:3001/album?id=${this.$route.params.id}`;
    ajaxRequest(albumDataURL, 'GET', albumDataSuccess, albumDataError);
  }
}
</script>

<style scoped>
.album {
  position: relative;
  padding-top: 0.88rem;
}
</style>
