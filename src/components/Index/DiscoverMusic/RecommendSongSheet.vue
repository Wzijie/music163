<template>
  <div class="recommend-songsheet">
    <h2 class="section-title">推荐歌单<i class="icon-arrow"></i></h2>
    <ul class="songsheet-list section-list" v-if='recommendSongSheetData.length !== 0'>
      <li v-for='songSheet in recommendSongSheetData'>
        <router-link to='SongSheet'>
          <div class="songsheet-cover-box">
            <img :src='songSheet.picUrl' :alt='songSheet.copywriter'>
            <p class="play-count">
              <i class="icon-headset"></i>
              <span>{{ toTenThousandUnits(songSheet.playCount) }}</span>
            </p>
          </div>
          <div class="songsheet-descript song-descript">
            <p>{{ songSheet.name }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend-songsheet',
  props: [ 'recommendSongSheetData' ],
  data () {
    return {
      
    }
  },
  methods: {
    toTenThousandUnits: function (num) {
      return num > 10000 ? (num / 10000).toFixed(1) + '万' : num;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend-songsheet {

}

.songsheet-list {
  
}

.songsheet-list li {
  width: 2.46rem;
}

.songsheet-list li a {

}

.songsheet-list li a .songsheet-cover-box {
  height: 2.46rem;;
  position: relative;
}

.songsheet-list li a .songsheet-cover-box .play-count .icon-headset {
  display: inline-block;
  width: 0.21rem;
  height: 0.19rem;
  background: url('../../../assets/images/icon-headset.png') no-repeat;
  background-size: cover;
}

.songsheet-list li a .songsheet-descript {
  margin-top: 0.15rem;
}
</style>
