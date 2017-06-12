<template>
  <transition name="fade">  
    <div class="mask" v-show='isSongPlayListShow' @click='isSongPlayListShowChange'></div>
  </transition>  
</template>

<script>
export default {
  name: 'mask',
  data () {
    return {

    }
  },
  computed: {
    // 是否显示音乐播放列表组件
    isSongPlayListShow () {
      return this.$store.state.MusicPlayer.isSongPlayListShow
    }
  },
  methods: {
    // 改变是否显示音乐播放列表组件
    isSongPlayListShowChange () {
      this.$store.commit('MusicPlayer/isSongPlayListShowChange');
    } 
  }
}
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
