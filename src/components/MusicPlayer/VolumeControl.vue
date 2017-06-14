<template>
  <div class="volume-control">
    <div class="set-volume-mute" @click='changeMuted'>
      <i :class='volumeClass'></i>
    </div>
    <div class="volume-progress" @touchmove='getVolumeRatio' @touchend='getVolumeRatio'>
      <div class="progress-total progress-bar"></div> 
      <div class="progress-current progress-bar" :style='{ width: currentProgressWidth }'></div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'volume-control',
  data () {
    return {
      // 音量
      // volume: 1,
      // 是否静音
      // muted: false
    }
  },
  computed: {
    volume () {
      return this.$store.state.MusicPlayer.volume;
    },
    muted () {
      return this.$store.state.MusicPlayer.muted;
    },
    // 当前音量进度条宽度
    currentProgressWidth () {
      var progressWidth = this.volume * 100 + '%';
      return this.muted ? '0%' : progressWidth;
    },
    volumeClass () {
      return this.muted ? 'icon-volume-mute' : 'icon-volume';
    }
  },
  methods: {
    // 获取设置音量
    getVolumeRatio (event) {
      var progress = event.currentTarget;
      var ratio = (event.changedTouches[0].pageX - progress.offsetLeft) / progress.offsetWidth;
      var muted = false;
      ratio = ratio >= 1 ? 1 : ratio;
      ratio = ratio <= 0 ? 0 : ratio;
      // this.volume = ratio;
      // this.muted = false;
      if (ratio === 0) {
        muted = true;
      }
      this.$store.commit('MusicPlayer/changeVolume', {
        data: ratio
      });
      this.$store.commit('MusicPlayer/changeMuted', {
        data: muted
      });
    },
    changeMuted () {
      // this.muted = !this.muted;
      this.$store.commit('MusicPlayer/changeMuted', {
        data: !this.muted
      });
    }
  }
}
</script>

<style scoped>
.volume-control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0.32rem;
  position: absolute;
  top: 1rem;
  z-index: 2;
}

.set-volume-mute {
  width: 0.5rem;
  height: 100%;
  margin-right: 0.15rem;
}

.set-volume-mute i {
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
}

.set-volume-mute .icon-volume {
  background-image: url('../../assets/images/icon-volume.png');
}

.set-volume-mute .icon-volume-mute {
  background-image: url('../../assets/images/icon-volume-mute.png');
}

.volume-progress {
  width: 6rem;
  height: 100%;
  position: relative;
}

.volume-progress .progress-bar {
  width: 100%;
  height: 0.04rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.volume-progress .progress-total {
  background: rgba(255,255,255,0.3);
}

.volume-progress .progress-current {
  width: 0;
  background: rgba(255,255,255,0.5);
  position: relative;
}

.volume-progress .progress-current:before {
  content: '';
  width: 0.24rem;
  height: 0.24rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%; right: 0;
  transform: translate(50%, -50%);
}
</style>
