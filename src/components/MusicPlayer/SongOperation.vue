<template>
  <div class="song-operation">
    <ul>
      <li>
        <i class="icon-like translate-center"></i>
      </li>
      <li>
        <i class="icon-download translate-center"></i>
      </li>
      <li>
        <span class="comment-count translate-center">999+</span>
        <i class="icon-comment_02 translate-center"></i>
      </li>
      <li>
        <i class="icon-more"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'song-operation',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-operation {
  display: flex;
  justify-content: center;
  height: 0.63rem;
  min-height: 0.63rem;
}

.song-operation ul {
  display: flex;
  width: 6.08rem;
  height: 100%;
}

.song-operation ul li {
  flex: 1;
  height: 100%;
  position: relative;
}

.song-operation ul li i {
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
}

.song-operation ul li i.icon-like {
  width: 0.63rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-like.png');
}

.song-operation ul li i.icon-comment_02 {
  width: 0.43rem;
  height: 0.4rem;
  background-image: url('../../assets/images/icon-comment_02.png');
  left: 45%;
}

.song-operation ul li i.icon-more {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-more.png');
  transform: rotate(90deg);
  position: absolute;
  top: 50%; left: 50%;
  margin: -0.24rem 0 0 -0.24rem;
}

.song-operation ul li .comment-count {
  font-size: 0.22rem;
  color: rgba(255,255,255,0.7);
  transform: translate(10%, -100%);
}
</style>
