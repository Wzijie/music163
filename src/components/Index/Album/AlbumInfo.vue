<template>
  <div class="songsheet-info">
    <div class="songsheet-cover">
      <img :src='albumCover' :alt='albumLoading.name'>
      <i class="icon-detail-info">i</i>
    </div>
    <div class="songsheet-title-author">
      <h2 class="title">{{ albumLoading.name }} <span v-if='albumLoading.transNames'>({{ albumLoading.transNames[0] }})</span></h2>
      <div class="author">
        <p class="author-name text-overflow">歌手：{{ albumLoading.artist.name }}</p>
        <i class="icon-right-arrow">&gt;</i>
      </div>
      <div class="publish-time">发行时间：{{ translateTime(albumLoading.publishTime) }}</div>
    </div>
  </div>
</template>

<script>
import translateTime from '@/plugs/translateTime';
export default {
  name: 'songsheet-info',
  props: [ 'albumData', 'albumCover' ],
  data () {
    return {
      
    }
  },
  computed: {
    albumLoading: function () {
      if (Object.keys(this.albumData).length !== 2) {
        return this.albumData;
      } else {
        return {
          name: '正在加载...',
          publishTime: 1498579200007,
          artist: {
            name: '正在加载...'
          }
        }
      }
    }
  },
  methods: {
    translateTime (timeStamp) {
      return translateTime(timeStamp);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.songsheet-info {
  display: flex;
  height: 3.4rem;
  padding: 0.3rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

/*.songsheet-info:before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -1;
  background: url('http://p4.music.126.net/6grgnvPxRAbW4AFEr-TlGg==/19072128695547028.jpg?param=200y200') no-repeat;
  background-size: 8.5rem 6rem;
  background-position: 0 -0.8rem;
  filter: blur(15px);
  margin: -30px;
}*/

.songsheet-info .songsheet-cover {
  width: 2.8rem;
  height: 100%;
  position: relative;
}

.songsheet-info .songsheet-cover .icon-detail-info {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border: 0.02rem solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  background: rgba(0,0,0,0.6);
  position: absolute;
  bottom: 0.07rem; right: 0.07rem;
  font-size: 0.24rem;
  color: #fff;
  font-style: normal;
}

.songsheet-info .songsheet-title-author {
  width: 4.1rem;
  height: 100%;
  padding-left: 0.25rem;
  box-sizing: border-box;
}

.songsheet-info .songsheet-title-author .title {
  height: 50%;
  font-weight: normal;
  font-size: 0.32rem;
  color: #fff;
  text-align: left;
  overflow: hidden;
  padding: 0.25rem 0.1rem;
  box-sizing: border-box;
}

.songsheet-info .songsheet-title-author .author {
  display: flex;
  align-items: center;
  color: #ddd;
  margin-top: 0.1rem;
}

.songsheet-info .songsheet-title-author .author .author-name {
  max-width: 2.8rem;
  font-size: 0.28rem;
  margin: 0 0.1rem;
}

.songsheet-info .songsheet-title-author .publish-time {
  font-size: 0.28rem;
  color: #ddd;
  text-align: left;
}
</style>
