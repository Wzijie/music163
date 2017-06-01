<template>
  <div class="index">
    <router-view></router-view>
    <IndexNav></IndexNav>
  </div>
</template>

<script>
import IndexNav from '@/components/Index/IndexNav';
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'IndexNav': IndexNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
