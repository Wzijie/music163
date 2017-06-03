<template>
  <div class="header">
    <router-link to='/index/DiscoverMusic' class='goback'>
      <i class="icon-goback"></i>
    </router-link>
    <h2 class="songsheet-title">这里是歌单标题</h2>
    <div class="music-playing">
      <MusicPlayingLink></MusicPlayingLink>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import MusicPlayingLink from '@/components/MusicPlayingLink';
export default {
  name: 'songsheet-header',
  data () {
    return {
      
    }
  },
  components: {
    'MusicPlayingLink': MusicPlayingLink
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
}

.header:before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -2;
  background: url('http://p4.music.126.net/6grgnvPxRAbW4AFEr-TlGg==/19072128695547028.jpg?param=200y200') no-repeat;
  background-size: 8.5rem 6rem;
  background-position: center top;
  filter: blur(0.15rem);
  margin: -0.3rem;
}

.header .goback {
  display: block;
  width: 0.95rem;
  height: 0.44rem;
}

.header .goback .icon-goback {
  display: inline-block;
  width: 0.25rem;
  height: 0.44rem;
  background: url('../../../assets/images/goback.png') no-repeat;
  background-size: cover;
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
