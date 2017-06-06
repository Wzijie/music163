<template>
  <div class="header">
    <gobackLink></gobackLink>
    <div class="song-info">
      <p class="song-name text-overflow">歌名</p>
      <p class="song-album text-overflow">abc</p>
    </div>
    <div class="song-share">
      <i class="icon-share"></i>
    </div>
  </div>
</template>

<script>
import gobackLink from '@/components/gobackLink';
export default {
  name: 'music-player-header',
  data () {
    return {
      
    }
  },
  components: {
    'gobackLink': gobackLink
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
  border-bottom: 0.01rem solid #333;
  color: #fff;
}

.header .song-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 5rem;
  height: 100%;
}

.header .song-info p {
  width: 100%;
}

.header .song-info p.song-name {
  font-size: 0.3rem;
}

.header .song-info p.song-album {
  font-size: 0.22rem;
}


.header .song-share {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.95rem;
  height: 100%;
}

.header .song-share i {
  background-size: cover;
}
</style>
