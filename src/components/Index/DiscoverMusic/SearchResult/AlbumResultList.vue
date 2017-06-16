<template>
  <ul class="album-result result-list most-result">
    <li v-for='album in albumResult'>
      <div class="cover">
        <img :src='album.picUrl' :alt='album.name'>
        <i class="icon disc-bg_02"></i>
      </div>
      <a class="info">
        <p class="album-name">{{ album.name }}</p>
        <p class="author-and-time">{{ album.artist.name }} {{ translateTime(album.publishTime) }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'album-result',
  props: [ 'albumResult' ],
  data () {
    return {

    }
  },
  methods: {
    translateTime (timeStamp) {
      var date = new Date(timeStamp);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      return `${year}-${month + 1}-${day}`;
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
  flex-wrap: wrap;
  align-content: center;
  margin-left: 0.4rem;
}

.album-result li a.info p {
  width: 100%;
  margin: 0.05rem 0;
}

.album-result li a.info p.album-name {
  font-size: 0.32rem;
}

.album-result li a.info p.author-and-time {
  font-size: 0.26rem;
  color: #7d7d7f;
}
</style>
