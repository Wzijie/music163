<template>
  <div class="song-cover-box">
    <div class="song-cover">
      <div class="disc-bg translate-center"></div>
      <img class="cover translate-center" src="http://p4.music.126.net/xKDBkJJm78xWnHBEQcKxcQ==/109951162935702655.jpg?param=200y200" alt="1">
    </div>
  </div>    
</template>

<script>
export default {
  name: 'song-cover-box',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-cover-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 67%;
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
