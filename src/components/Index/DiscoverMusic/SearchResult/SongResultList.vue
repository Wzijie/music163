<template>
  <ul class="song-result result-list">
    <li v-for='song in songResult'>
      <a @click='linkSongPlay(song.id)'>
        <p class="song-name text-overflow" v-html='replaceKeyword(replaceKeyword(song.name))'></p>
        <p class="song-author-album text-overflow">
          <i class="icon icon-sq"></i>
          <span class="author" v-html='replaceKeyword(song.artists[0].name)'></span> 
          - 
          <span class="album" v-html='replaceKeyword(song.album.name)'></span></p>
      </a>
      <div class="detail">
        <i class="icon icon-detail translate-center"></i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'song-result',
  props: [ 'songResult', 'linkSongPlay', 'replaceKeyword' ],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.song-result {
  
}

.song-result li {
  border-bottom: 0.01rem solid #ccc;
}

.song-result li a {
  display: block;
  width: 100%;
  padding: 0.05rem 0;
  overflow: hidden;
}

.song-result li a p {
  margin: 0.05rem 0;
}

.song-result li a .song-author-album {
  font-size: 0.24rem;
  color: #666;
}

.song-result li .detail {
  width: 0.95rem;
  min-width: 0.95rem;
  height: 1rem;
  position: relative;
}

.icon-sq {
  width: 0.24rem;
  height: 0.16rem;
  background-image: url('../../../../assets/images/icon-sq.png');
}
</style>
