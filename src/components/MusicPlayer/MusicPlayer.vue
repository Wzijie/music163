<template>
  <div class="music-player">
    <div class="blur-img"></div>
    <musicPlayerHeader></musicPlayerHeader>
    <SongCover></SongCover>
    <SongOperation></SongOperation>
    <AudioControl></AudioControl>
  </div>
</template>

<script>
import Header from './Header';
import SongCover from './SongCover';
import SongOperation from './SongOperation';
import AudioControl from './AudioControl';
export default {
  name: 'music-player',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'musicPlayerHeader': Header,
    'SongCover': SongCover,
    'SongOperation': SongOperation,
    'AudioControl': AudioControl
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
