<template>
  <div class="songsheet-info">
    <div class="songsheet-cover">
      <img :src='songsheetCover' :alt='songsheetInfoLoading.name'>
      <p class="play-count">
        <i class="icon-headset"></i>
        <span>{{ toTenThousandUnits(songsheetInfoLoading.playCount) }}</span>
      </p>
      <i class="icon-detail-info">i</i>
    </div>
    <div class="songsheet-title-author">
      <h2 class="title">{{ songsheetInfoLoading.name }}</h2>
      <div class="author">
        <div class="author-face">
          <img :src='songsheetInfoLoading.creator.avatarUrl' :alt='songsheetInfoLoading.creator.nickname'>
          <span class="author-label"></span>
        </div>
        <p class="author-name text-overflow">{{ songsheetInfoLoading.creator.nickname }}</p>
        <i class="icon-right-arrow">&gt;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'songsheet-info',
  props: [ 'songsheetData', 'songsheetCover' ],
  data () {
    return {
      
    }
  },
  computed: {
    songsheetInfoLoading: function () {
      if (Object.keys(this.songsheetData).length !== 0) {
        return this.songsheetData;
      } else {
        return {
          name: '正在加载...',
          playCount: 0,
          creator: {
            avatarUrl: '/static/default-img.png',
            nickname: '正在加载...'
          }
        }
      }
    }
  },
  methods: {
    toTenThousandUnits: function (num) {
      return num > 100000 ? (num / 10000).toFixed(1) + '万' : num;
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

.songsheet-info .songsheet-title-author .author .author-face {
  width: 0.6rem;
  height: 0.6rem;
  position: relative;
}

.songsheet-info .songsheet-title-author .author .author-face img {
  border-radius: 50%;
}

.songsheet-info .songsheet-title-author .author .author-face .author-label {
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 0; right: -0.08rem;
}

.songsheet-info .songsheet-title-author .author .author-name {
  max-width: 2.8rem;
  font-size: 0.28rem;
  margin: 0 0.1rem;
}
</style>
