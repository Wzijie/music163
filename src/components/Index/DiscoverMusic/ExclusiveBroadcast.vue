<template>
  <div class="exclusive-broadcast">
    <h2 class="section-title">独家放送<i class="icon-arrow"></i></h2>
    <ul class="broadcast-list section-list">
      <li v-for='(broadcast, index) in exclusiveBroadcastData' :class='{ "broadcast-banner": index === 2 }'>
        <a href="###">
          <div class="broadcast-cover">
            <img :src='broadcast.picUrl' :alt='broadcast.copywriter'>
            <span>
              <i class="icon-video-camera"></i>
            </span>
          </div>
          <div class="broadcast-descript song-descript">
            <p>{{ broadcast.name }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'exclusive-broadcast',
  props: [ 'exclusiveBroadcastData' ],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.broadcast-list {
  
}

.broadcast-list li {
  width: 3.7rem;
}

.broadcast-list li a {

}

.broadcast-list li a .broadcast-cover {
  height: 2.1rem;
  position: relative;
}

.broadcast-list li a .broadcast-cover span {
  position: absolute;
  top: 0.1rem; left: 0.12rem;
  width: 0.44rem;
  height: 0.44rem;
  border: 0.02rem solid rgba(255,255,255,0.6);
  border-radius: 50%;
  box-sizing: border-box;
  background: rgba(0,0,0,0.5);
}

.broadcast-list li a .broadcast-cover span i {
  display: inline-block;
  width: 0.25rem;
  height: 0.16rem;
  vertical-align: middle;
}

.broadcast-list li a .broadcast-cover span .icon-video-camera {
  background: url('../../../assets/images/icon-video-camera.png') no-repeat;
  background-size: cover;
}

.broadcast-list li a .broadcast-cover span .icon-advertising {
  width: 0.22rem;
  height: 0.22rem;
  background: url('../../../assets/images/icon-advertising.png') no-repeat;
  background-size: cover;
}

.broadcast-list li a .broadcast-descript {
  margin-top: 0.15rem;
}

.broadcast-list li.broadcast-banner {
  width: 100%;
}

.broadcast-list li.broadcast-banner a .broadcast-cover {
  height: 2.78rem;
}

</style>
