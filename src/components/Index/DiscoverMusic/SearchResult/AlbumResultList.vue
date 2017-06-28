<template>
  <ul class="album-result result-list most-result">
    <li v-for='album in albumResult'>
      <div class="cover">
        <img :src='album.picUrl' :alt='album.name'>
        <i class="icon disc-bg_02"></i>
      </div>
      <a class="info">
        <p class="album-name text-overflow" v-html='replaceKeyword(album.name)'></p>
        <p class="author-and-time detail-info text-overflow">
          <span class="author"  v-html='replaceKeyword(album.artist.name)'></span> 
          <span class="time">{{ translateTime(album.publishTime) }}</span>
        </p>
      </a>
    </li>
  </ul>
</template>

<script>
import translateTime from '@/plugs/translateTime';
export default {
  name: 'album-result',
  props: [ 'albumResult', 'replaceKeyword' ],
  data () {
    return {

    }
  },
  methods: {
    translateTime (timeStamp) {
      return translateTime(timeStamp);
    }
  }
}
</script>

<style scoped>
.album-result li div.cover {
  position: relative;
}

.album-result li div.cover i.disc-bg_02{
  width: 0.2rem;
  height: 0.98rem;
  background-image: url('../../../../assets/images/disc-bg_02.png');
  position: absolute;
  top: 50%; right: 0;
  transform: translate(100%, -50%);
}

.album-result li a.info {
  margin-left: 0.4rem;
}

</style>
