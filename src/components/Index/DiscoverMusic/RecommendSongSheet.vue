<template>
  <div class="recommend-songsheet">
    <h2 class="section-title">推荐歌单<i class="icon-arrow"></i></h2>
    <p class="loading-text" v-if='loading'>正在加载...</p>
    <ul class="songsheet-list section-list" v-else>
      <li v-for='songSheet in recommendSongSheetData'>
        <router-link :to='routerLinkURL(songSheet.id)'>
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
    },
    routerLinkURL: function (id) {
      return 'SongSheet/' + id;
    }
  },
  computed: {
    loading: function () {
      return this.recommendSongSheetData.length === 0;
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

.songsheet-list li a .songsheet-descript {
  margin-top: 0.15rem;
}
</style>
