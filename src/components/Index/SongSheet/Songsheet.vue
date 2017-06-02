<template>
  <div class="song-sheet">
    <BlurBg></BlurBg>
    <songsheetHeader></songsheetHeader>
    <SongsheetInfo></SongsheetInfo>
    <SongsheetOperation></SongsheetOperation>
  </div>
</template>

<script>
import BlurBg from './BlurBg';
import Header from './Header';
import SongsheetInfo from './SongsheetInfo';
import SongsheetOperation from './SongsheetOperation';
export default {
  name: 'song-sheet',
  data () {
    return {
      
    }
  },
  components: {
    'BlurBg': BlurBg,
    'songsheetHeader': Header,
    'SongsheetInfo': SongsheetInfo,
    'SongsheetOperation': SongsheetOperation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-sheet {
  position: relative;
  padding-top: 0.88rem;
}
</style>
