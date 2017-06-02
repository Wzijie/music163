<template>
  <router-link to="/MusicPlayer" class='link-music-player'>
    <i class="icon-music-play"></i>
  </router-link>
</template>

<script>
export default {
  name: 'link-music-player',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link-music-player {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
}

.link-music-player .icon-music-play {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: url('../assets/images/icon-music-play.png') no-repeat;
  background-size: cover;
  vertical-align: middle;
}
</style>
