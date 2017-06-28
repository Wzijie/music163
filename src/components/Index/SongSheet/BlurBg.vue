<template>
  <div class="blur-bg">
    <div class="blur-img" :style='{ "background-image": `url(${cover})` }'></div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'blur-bg',
  props: [ 'cover' ],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blur-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5.28rem;
  overflow: hidden;
  z-index: -1;
}

.blur-bg .blur-img {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -2;
  background: url('http://p4.music.126.net/6grgnvPxRAbW4AFEr-TlGg==/19072128695547028.jpg?param=200y200') no-repeat;
  background-repeat: no-repeat;
  background-size: 8.5rem 6rem;
  background-position: center top;
  filter: blur(0.15rem);
  margin: -0.3rem;
}

.blur-bg .mask {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
}
</style>
