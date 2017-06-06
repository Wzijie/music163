<template>
  <div class="header">
    <div class="blur-img" :style='{ "background-image": `url(${songsheetCover})` }'></div>
    <gobackLink></gobackLink>
    <h2 class="songsheet-title">歌单</h2>
    <div class="music-playing">
      <MusicPlayingLink></MusicPlayingLink>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import MusicPlayingLink from '@/components/MusicPlayingLink';
import gobackLink from '@/components/gobackLink';
export default {
  name: 'songsheet-header',
  props: [ 'songsheetCover' ],
  data () {
    return {
      
    }
  },
  components: {
    'MusicPlayingLink': MusicPlayingLink,
    'gobackLink': gobackLink
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
  position: fixed;
  top: 0;
  color: #fff;
  /*background: rgba(0,0,0,0.3);*/
  overflow: hidden;
  z-index: 1;
}

.header .blur-img {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -2;
  background: url('http://p4.music.126.net/6grgnvPxRAbW4AFEr-TlGg==/19072128695547028.jpg?param=200y200') no-repeat;
  background-repeat: no-repeat;
  background-size: 8.5rem 6rem;
  background-position: center top;
  filter: blur(0.15rem);
  margin: -0.3rem;
}

.header .songsheet-title {
  font-size: 0.32rem;
  font-weight: normal;
}

.header .music-playing {
  padding-right: 0.25rem;
}

.header .mask {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -1;
  background: rgba(0,0,0,0.3);
}
</style>
