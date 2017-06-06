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
  height: 1.2rem;
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
</style>
