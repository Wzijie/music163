<template>
  <div class="newest-music">
    <h2 class="section-title">最新音乐<i class="icon-arrow"></i></h2>
    <ul class="newmusic-list section-list" v-if='newestMusicData.length !== 0'>
      <li v-for='music in newestMusicData'>
        <a href="###">
          <div class="newmusic-cover">
            <img :src='music.song.album.picUrl' :alt='music.name'>
          </div>
          <div class="newmusic-info song-descript">
            <p class="newmusic-title">{{ music.name }}</p>
            <p class="newmusic-author">{{ music.song.artists[0].name }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newest-music',
  props: [ 'newestMusicData' ],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newmusic-list {
  
}

.newmusic-list li {
  width: 2.46rem;
}

.newmusic-list li a {
  
}

.newmusic-list li a .newmusic-cover {
  height: 2.46rem;
}

.newmusic-list li a .newmusic-info {
  margin-top: 0.15rem;
}

.newmusic-list li a .newmusic-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.newmusic-list li a .newmusic-info p.newmusic-author {
  color: #999;
}
</style>
