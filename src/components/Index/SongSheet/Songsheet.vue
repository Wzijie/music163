<template>
  <div class="song-sheet">
    <songsheetHeader></songsheetHeader>
  </div>
</template>

<script>
import Header from './Header';
export default {
  name: 'song-sheet',
  data () {
    return {
      
    }
  },
  components: {
    'songsheetHeader': Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
