<template>
  <div class="audio-control">
    <p class="loading-text" v-if='songUrl === ""'>正在加载...</p>
    <template else>
    <div class="progress-info">
      <span class="current-time audio-time">{{ currentMinuteSecond }}</span>
      <div class="progress" @touchstart='progressTouchstart' @touchmove='progressTouchmove' @touchend='progressTouchend'>
        <div class="progress-total progress-bar"></div>
        <div class="progress-buffer progress-bar" :style='{ width: bufferedProgressWidth }'></div>
        <div class="progress-current progress-bar" :style='{ width: currentProgressWidth }'></div>
      </div>
      <span class="duration-time audio-time">{{ durationMinuteSecond }}</span>
    </div>
    <ul class="control">
      <li>
        <i class="icon-loop-list"></i>
      </li>
      <li @click='changeSongIndex(songIndex - 1)'>
        <i class="icon-prev"></i>
      </li>
      <li class="play-control" @click='playStateChange'>
        <i :class='iconPlayClass'></i>
      </li>
      <li @click='changeSongIndex(songIndex + 1)'>
        <i class="icon-prev icon-next"></i>
      </li>
      <li>
        <i class="icon-play-list"></i>
      </li>
    </ul> 
    <audio :src='songUrl' preload='auto' @canplay='audioCanplay' @timeupdate='audioTimeupdate' @progress='changeProgressBuffer' @waiting='waitingBuffering'></audio>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ajaxRequest from '@/plugs/ajaxRequest';
export default {
  name: 'audio-control',
  props: [ 'songList', 'songIndex' ],
  data () {
    return {
      // 播放状态
      // pause: null,
      songUrl: '',
      // 音频长度
      durationTime: 0,
      // 当前播放时间
      currentTime: 0,
      // audio元素
      audio: null,
      // 是否正在拖动进度条
      progressTouching: null,
      // 最后一个缓冲范围的结束位置时间
      lastBufferLength: 0,
      isWaiting: null
    }
  },
  computed: {
    // 根据播放状态返回图标class
    iconPlayClass () {
      return this.pause ? 'icon-play-02' : 'icon-pause';
    },
    // 返回转换后的音频长度
    durationMinuteSecond () {
      return this.computedMinuteSecond(this.durationTime);
    },
    // 返回转换后的音频当前播放时间
    currentMinuteSecond () {
      return this.computedMinuteSecond(this.currentTime);
    },
    // 返回播放进度条宽度
    currentProgressWidth () {
      var ratio = this.currentTime / this.durationTime;
      return ratio * 100 + '%';
    },
    // 缓冲进度条宽度
    bufferedProgressWidth () {
      var ratio = this.lastBufferLength / this.durationTime;
      return ratio * 100 + '%';
    },
    ...mapState({
      pause (state) {
        return state.MusicPlayer.pause;
      },
      volume (state) {
        return state.MusicPlayer.volume;
      },
      muted (state) {
        return state.MusicPlayer.muted;
      }
    })
  },
  methods: {
     // 获取歌曲资源url
    getSongURL (songId) {
      var getSongSuccess = (data) => {
        console.log(data, '获取歌曲资源url');
        this.songUrl = data.data[0].url;
      }
      var getSongError = (error) => {
        console.log(error);
      }
      var getSongRequestURL = `http://localhost:3000/music/url?id=${songId}`;
      ajaxRequest(getSongRequestURL, 'GET', getSongSuccess, getSongError);
    },

    // 音频可播放时执行
    audioCanplay (event) {
      console.dir(event.target, 'Canplay');
      // 开始播放并设置相应状态
      this.audio = event.target;
      this.durationTime = this.audio.duration;
      this.audio.play();
      this.isWaiting = false;
      // this.pause = false;
      this.$store.commit('MusicPlayer/changePlayState', {
        data: false
      });
    },
    // 秒 转换为 '分:秒'
    // 100 ===> '01:40'
    computedMinuteSecond (secondTime) {
      if (secondTime === 0) {
        return '00:00';
      }
      var minute = Math.floor(secondTime / 60);
      var second = Math.floor(secondTime % 60);
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return `${minute}:${second}`;
    },
    // 播放暂停切换
    playStateChange () {
      console.log(this.pause);
      if (!this.audio || this.waiting) {
        return;
      }
      if (this.audio.paused) {
        this.audio.play();
        // this.pause = false;
        this.$store.commit('MusicPlayer/changePlayState', {
          data: false
        });
      } else {
        this.audio.pause();
        // this.pause = true;
        this.$store.commit('MusicPlayer/changePlayState', {
          data: true
        });
      }
    },

    // 音频播放时持续执行
    audioTimeupdate () {
      // 如果正在拖动进度条则退出
      if (this.progressTouching || this.audio === null) {
        return;
      }
      // 获取当前播放时间
      this.currentTime = this.audio.currentTime;

      // 设置音量
      this.audio.volume = this.volume;
      this.audio.muted = this.muted;
    },
    
    // 改变当前播放时间
    changeCurrentTime (time) {
      this.audio.currentTime = time;
    },
    // 进度条touchstart时设置'正在拖动状态'
    progressTouchstart (event) {
      this.progressTouching = true;
    },
    // 拖动中设置播放时间状态
    progressTouchmove (event) {
      var progress = event.currentTarget;
      var ratio = (event.touches[0].pageX - progress.offsetLeft) / progress.offsetWidth;
      ratio = ratio >= 1 ? 1 : ratio;
      ratio = ratio <= 0 ? 0 : ratio;
      this.currentTime = ratio * this.durationTime;
    },
    // touchend时设置音频的当前播放时间
    progressTouchend (event) {
      var progress = event.currentTarget;
      var ratio = (event.changedTouches[0].pageX - progress.offsetLeft) / progress.offsetWidth;
      ratio = ratio >= 1 ? 1 : ratio;
      ratio = ratio <= 0 ? 0 : ratio;
      this.currentTime = ratio * this.durationTime;
      this.changeCurrentTime(this.currentTime);
      this.progressTouching = false;
    },
    // 设置最后一个缓冲范围的结束位置
    changeProgressBuffer (event) {
      if (event.target.buffered.length === 0) {
        return;
      }
      console.log(event.target.buffered.start(0), event.target.buffered.end(0));
      var buffered = event.target.buffered;
      this.lastBufferLength = buffered.end(buffered.length - 1);
    },

    // 因缓冲而暂停时改变播放状态
    waitingBuffering (event) {
      console.log('waiting');
      this.isWaiting = true;
      this.$store.commit('MusicPlayer/changePlayState', {
        data: true
      });
    },

    // 改变当前歌曲索引
    changeSongIndex (songIndex) {
      if (songIndex >= this.songList.length || songIndex < 0) {
        return;
      }
      this.songUrl = '';
      this.getSongURL(this.songList[songIndex].id);
      this.$store.commit('MusicPlayer/changePlayState', {
        data: true
      });
      this.$store.commit('MusicPlayer/changeSongIndex', {
        data: songIndex
      });
    }
  },
  updated () {

  },
  mounted () {
    console.log('mounted');
    this.getSongURL(this.songList[this.songIndex].id);
  }
}
</script>

<style scoped>
.audio-control {
  height: 2.43rem;
  min-height: 2.43rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.1rem;
  padding: 0.39rem 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
}

.progress-info .audio-time {
  font-size: 0.22rem;
}

.progress-info .current-time {
  color: rgba(255,255,255,0.7);
}

.progress-info .duration-time {
  color: rgba(255,255,255,0.5);
}

.progress-info .progress {
  width: 5.34rem;
  height: 0.32rem;
  position: relative;
}

.progress-info .progress .progress-bar {
  height: 0.04rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.progress-info .progress .progress-total {
  width: 100%;
  background: rgba(255,255,255,0.2);
}

.progress-info .progress .progress-current {
  width: 0%;
  background: #cc3333;
}

.progress-info .progress .progress-buffer {
  width: 0%;
  background: rgba(255,255,255,0.5);
}

.progress-info .progress .progress-current:before {
  content: '';
  display: block;
  width: 0.32rem;
  height: 0.32rem;
  border: 0.12rem solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  background: #cc3333;
  position: absolute;
  top: 50%; right: 0;
  transform: translate(50%, -50%);
}

.control {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.95rem;
}

.control li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5rem;
  height: 0.5rem;
}

.control .play-control {
  width: 0.92rem;
  height: 0.92rem;
  border: 0.01rem solid rgba(255,255,255,0.7);
  border-radius: 50%;
}

.control li i {
  display: inline-block;
}

.control li i.icon-loop-song {
  width: 0.48rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-loop-song.png') no-repeat;
  background-size: cover;
}

.control li i.icon-random-play {
  width: 0.48rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-random-play.png') no-repeat;
  background-size: cover;
}

.control li i.icon-prev {
  width: 0.48rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-prev.png') no-repeat;
  background-size: cover;
}

.control li i.icon-next {
  transform: rotate(180deg);
}

.control li i.icon-play-02 {
  width: 0.48rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-play_02.png') no-repeat;
  background-size: cover;
  transform: translateX(0.05rem);
}

.control li i.icon-pause {
  width: 0.48rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-pause.png') no-repeat;
  background-size: cover;
}

.control li i.icon-play-list {
  width: 0.48rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-play-list.png') no-repeat;
  background-size: cover;
}

.loading-text {
  color: rgba(255,255,255, 0.7);
  background: transparent;
}
</style>
