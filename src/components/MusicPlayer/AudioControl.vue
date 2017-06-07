<template>
  <div class="audio-control">
    <div class="progress-info">
      <span class="current-time audio-time">00:45</span>
      <div class="progress">
        <div class="progress-total progress-bar"></div>
        <div class="progress-current progress-bar"></div>
      </div>
      <span class="total-time audio-time">05:45</span>
    </div>
    <ul class="control">
      <li>
        <i class="icon-loop-list"></i>
      </li>
      <li>
        <i class="icon-prev"></i>
      </li>
      <li class="play-control">
        <i class="icon-play-02"></i>
      </li>
      <li>
        <i class="icon-prev icon-next"></i>
      </li>
      <li>
        <i class="icon-play-list"></i>
      </li>
    </ul> 
    <audio src="http://m10.music.126.net/20170607113511/4012aed5b34b3c7f3a531544d6670eb3/ymusic/54ce/2312/0a69/d6ac8accf78f8deff0efbcb77afe75d3.mp3"></audio>
  </div>
</template>

<script>
export default {
  name: 'audio-control',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.audio-control {
  height: 2.43rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.1rem;
  padding: 0.39rem 0.2rem;
  box-sizing: border-box;
}

.progress-info .audio-time {
  font-size: 0.22rem;
}

.progress-info .current-time {
  color: rgba(255,255,255,0.7);
}

.progress-info .total-time {
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
  background: rgba(255,255,255,0.5);
}

.progress-info .progress .progress-current {
  width: 0%;
  background: #cc3333;
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

.control li i.icon-loop-list {
  width: 0.48rem;
  height: 0.33rem;
  background: url('../../assets/images/icon-loop-list.png') no-repeat;
  background-size: cover;
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
</style>
