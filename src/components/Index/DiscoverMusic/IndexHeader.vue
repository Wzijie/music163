<template>
  <div class="header">
    <div class="search">
      <span class="microphone">
        <i class="icon-microphone"></i>
      </span>
      <form>
        <i class="icon-search"></i>
        <input type="text" class="search-input" placeholder="搜索音乐、歌词、电台">
      </form>
      <MusicPlayingLink></MusicPlayingLink>
    </div>
  </div>
</template>

<script>
import MusicPlayingLink from '@/components/MusicPlayingLink';
export default {
  name: 'IndexHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'MusicPlayingLink': MusicPlayingLink
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.88rem;
  background: #d43c33;
}

.search .microphone {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}

.search .microphone .icon-microphone {
  display: inline-block;
  width: 0.34rem;
  height: 0.47rem;
  background: url('../../../assets/images/microphone1.png') no-repeat;
  background-size: cover;
  vertical-align: middle;
}

.search form {
  position: relative;
}

.search form .search-input {
  width: 6rem;
  height: 0.6rem;
  padding: 0.05rem 0.2rem;
  padding-left: 0.55rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.3rem;
  outline: none;
  font-size: 0.24rem;
}
.search form .search-input::-webkit-input-placeholder {
  /*text-align: center;*/
}
.search form .icon-search {
  display: block;
  width: 0.28rem;
  height: 0.28rem;
  background: url('../../../assets/images/icon-input-search.png') no-repeat;
  background-size: cover;
  position: absolute;
  top: 0.16rem; left: 0.2rem;
}
</style>
