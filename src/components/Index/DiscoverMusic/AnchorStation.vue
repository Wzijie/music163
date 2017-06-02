<template>
  <div class="anchor-station">
    <h2 class="section-title">主播电台<i class="icon-arrow"></i></h2>
    <ul class="station-list section-list">
      <li v-for='station in anchorStationData'>
        <a href="###">
          <div class="station-cover">
            <img :src='station.picUrl' :alt='station.copywriter'>
            <div class="station-author">
              <p>{{ station.program.dj.brand }}</p>
              <span>
                <i class="icon-triangle"></i>
              </span>
            </div>
          </div>
          <div class="station-title song-descript">
            <p>{{ station.name }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'anchor-station',
  props: [ 'anchorStationData' ],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.anchor-station {
  border-bottom: 0.01rem solid #e1e2e3;
  padding-bottom: 1.5rem;
}

.station-list li {
  width: 2.46rem;
}

.station-list li a .station-cover {
  height: 2.46rem;
  position: relative;
}

.station-list li a .station-cover .station-author {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: left;
  background-color: rgba(0,0,0,0.6);
  background: -webkit-linear-gradient(bottom, rgba(0,0,0,0.8), rgba(0,0,0,0));
}

.station-list li a .station-cover .station-author p {
  width: 1.8rem;
  font-size: 0.24rem;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0.15rem;
}

.station-list li a .station-cover .station-author span {
  position: absolute;
  bottom: 0.1rem; right: 0.1rem;
  width: 0.44rem;
  height: 0.44rem;
  border: 0.02rem solid rgba(255,255,255,0.6);
  border-radius: 50%;
  box-sizing: border-box;
  background: rgba(0,0,0,0.5);
}

.station-list li a .station-cover .station-author span .icon-triangle {
  display: block;
  width: 0;
  height: 0;
  border: 0.1rem solid transparent;
  /*border-right: 0.15rem solid yellow;
  border-bottom: 0.15rem solid blue;*/
  border-left: 0.2rem solid #fff;
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
}

.station-list li a .station-title {
  margin-top: 0.15rem;
}
</style>
