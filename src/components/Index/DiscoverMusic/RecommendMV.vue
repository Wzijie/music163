<template>
  <div class="recommend-mv">
    <h2 class="section-title">推荐MV<i class="icon-arrow"></i></h2>
    <ul class="mv-list section-list">
      <li v-for='mv in recommendMvData'>
        <a href="###">
          <div class="mv-cover">
            <img :src='mv.picUrl' :alt='mv.copywriter'>
            <p class="play-count">
              <i class="icon-video-camera"></i>
              <span>{{ toTenThousandUnits(mv.playCount) }}</span>
            </p>
          </div>
          <div class="mv-info song-descript">
            <p class="mv-title">{{ mv.name }}</p>
            <p class="mv-author">{{ mv.artistName }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend-mv',
  props: [ 'recommendMvData' ],
  data () {
    return {
      
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
.mv-list {
  
}

.mv-list li {
  width: 3.7rem;
}

.mv-list li a {
  
}

.mv-list li a .mv-cover {
  height: 2.1rem;
  position: relative;
}

.mv-list li a .mv-cover .play-count .icon-video-camera {
  display: inline-block;
  width: 0.25rem;
  height: 0.16rem;
  background: url('../../../assets/images/icon-video-camera.png') no-repeat;
  background-size: cover;
}

.mv-list li a .mv-info {
  margin-top: 0.15rem;
}

.mv-list li a .mv-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mv-list li a .mv-info p.mv-author {
  color: #999;
}
</style>
