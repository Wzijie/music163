<template>
  <div class="song-cover-box">
    <div class="song-cover" :style='{ transform: transformRotate }'>
      <div class="disc-bg translate-center"></div>
      <img class="cover translate-center" :src='songAlbumCover' :alt="pause">
    </div>
  </div>    
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'song-cover-box',
  props: [ 'songAlbumCover' ],
  data () {
    return {
      angle: 0,
      timerId: null
    }
  },
  computed: {
    ...mapState({
      pause (state) {
        return state.MusicPlayer.pause;
      }
    }),
    transformRotate () {
      return `rotate(${this.angle}deg)`;
    }
  },
  methods: {
    angleIncSetTimer () {
      this.timerId = setInterval(() => {
        this.angle++;
        if (this.angle >= 360) {
          this.angle = 0;
        }
      }, 35);
    }
  },
  updated () {
    // console.log(1, this.pause);
    if (this.pause) {
      clearInterval(this.timerId);
    } else {
      clearInterval(this.timerId);
      this.angleIncSetTimer();
    }
  },
  mounted () {
    // console.log(2);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-cover-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
}
.song-cover {
  width: 6.08rem;
  height: 6.08rem;
  background: rgba(255,255,255,0.1);
  border: 0.01rem solid rgba(255,255,255,0.2);
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
}

.song-cover .disc-bg {
  width: 5.74rem;
  height: 5.74rem;
  background: url('../../assets/images/disc-bg.png') no-repeat;
  background-size: cover;
}

.song-cover .cover {
  width: 3.94rem;
  height: 3.94rem;
  border-radius: 50%;
}
</style>
