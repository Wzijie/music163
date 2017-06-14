<template>
  <div class="song-cover-box">
    <div class="song-cover">
      <div class="disc-bg" :style='{ transform: transformRotate }'>
        <img class="cover translate-center" :src='songAlbumCover' :alt="pause">
      </div>
      <transition name='fade'>
        <div v-show='isTipShow' class="playmode-tip">{{ playModeTipText }}</div>
      </transition>
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
      rotateTimerId: null,
      isTipShow: false,
      tipShowTimerId: null
    }
  },
  computed: {
    ...mapState({
      pause (state) {
        return state.MusicPlayer.pause;
      },
      playMode (state) {
        return state.MusicPlayer.playMode;
      }
    }),
    // 旋转角度
    transformRotate () {
      return `rotate(${this.angle}deg)`;
    },
    // 播放模式提示文字
    playModeTipText () {
      return this.playModeSwitch('列表循环', '单曲循环', '随机播放');
    }
  },
  watch: {
    pause () {
      if (this.pause) {
        clearInterval(this.rotateTimerId);
      } else {
        clearInterval(this.rotateTimerId);
        this.angleIncSetTimer();
      }
    },
    playMode () {
      clearTimeout(this.tipShowTimerId);
      this.isTipShow = true;
      this.tipShowTimerId = setTimeout(() => {
        this.isTipShow = false;
      }, 1500);
    }
  },
  methods: {
    angleIncSetTimer () {
      this.rotateTimerId = setInterval(() => {
        this.angle++;
        if (this.angle >= 360) {
          this.angle = 0;
        }
      }, 35);
    },

    // 根据播放模式返回不同的内容
    // 3个参数分别是返回的内容
    playModeSwitch (listLoopReturn, songLoopReturn, randomPlayReturn) {
      switch (this.playMode) {
        case 'listLoop':
          return listLoopReturn;
        case 'oneSongLoop':
          return songLoopReturn;
        case 'randomPlay':
          return randomPlayReturn;
        default: break;
      }
    }
  },
  updated () {
    // console.log(1, this.pause);
    
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
  position: relative;
}
.song-cover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.08rem;
  height: 6.08rem;
  background: rgba(255,255,255,0.1);
  border: 0.01rem solid rgba(255,255,255,0.2);
  border-radius: 50%;
  box-sizing: border-box;
}

.song-cover .disc-bg {
  width: 5.74rem;
  height: 5.74rem;
  border-radius: 50%;
  background: #000 url('../../assets/images/disc-bg.png') no-repeat;
  background-size: cover;
  position: relative;
}

.song-cover .cover {
  width: 3.94rem;
  height: 3.94rem;
  border-radius: 50%;
}

.playmode-tip {
  width: 2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  background: rgba(0,0,0,0.9);
  border-radius: 0.15rem;
  font-size: 0.24rem;
  color: #fff;
  position: absolute;
  top: 50%; left: 50%;
  margin: -0.35rem 0 0 -1rem;
  transform: scale(1);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: scale(1.1);
}
</style>
