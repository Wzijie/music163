<template>
  <ul class="mv-result mv-list section-list result-list">
    <li v-for='mv in mvResult'>
      <a href="###">
        <div class="mv-cover">
          <img :src='mv.cover' :alt='mv.briefDesc'>
          <p class="play-count">
            <i class="icon-video-camera"></i>
            <span>{{ translateMaxNum(mv.playCount, 10000, '万') }}</span>
          </p>
        </div>
        <div class="mv-info song-descript">
          <p class="mv-title" v-html='replaceKeyword(mv.name)'></p>
          <p class="mv-author" v-html='replaceKeyword(singerNameMerge(mv.artists))'></p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import singerNameMerge from '@/plugs/singerNameMerge';
import translateMaxNum from '@/plugs/translateMaxNum';
export default {
  name: 'mv-result',
  props: [ 'mvResult', 'replaceKeyword' ],
  data () {
    return {
      
    }
  },
  methods: {
    translateMaxNum (num, maxNum, company) {
      return translateMaxNum(num, maxNum, company);
    },
    singerNameMerge (singerArr) {
      return singerNameMerge(singerArr);
    } 
  }
}
</script>

<style scoped>
.mv-result {
  padding-left: 0;
}

.mv-result li {
  align-items: flex-start;
}
</style>
