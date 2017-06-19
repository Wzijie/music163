<template>
  <ul class="songsheet-result most-result result-list">
    <li v-for='songsheet in songsheetResult'>
      <div class="cover">
        <img :src='songsheet.coverImgUrl' :alt='songsheet.name'>
      </div>
      <router-link :to='`SongSheet/${songsheet.id}`' class="info">
        <p class="songsheet-name text-overflow" v-html='replaceKeyword(songsheet.name)'></p>
        <p class="detail-info text-overflow">
          <span class="song-count">{{ songsheet.trackCount }}首音乐</span>
          <span class="author" v-html='replaceKeyword(`by ${songsheet.creator.nickname}，`)'></span>
          <span class="play-total">播放{{ translateMaxNum(songsheet.playCount, 10000, '万') }}次</span>
        </p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import translateMaxNum from '@/plugs/translateMaxNum';
export default {
  name: 'songsheet-result',
  props: [ 'songsheetResult', 'replaceKeyword' ],
  data () {
    return {

    }
  },
  methods: {
    translateMaxNum (num, maxNum, company) {
      return translateMaxNum(num, maxNum, company);
    }
  }
}
</script>

<style scoped>

</style>
