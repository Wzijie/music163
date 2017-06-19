<template>
  <div class="radio-station-result result-list most-result">
    <h3 class="radio-title">电台</h3>
    <ul>
      <li v-for='radioStation in radioStationResult'>
        <div class="cover">
          <img :src='radioStation.picUrl' :alt='radioStation.name'>
        </div>
        <a class="info">
          <p class="radio-station-name text-overflow" v-html='replaceKeyword(radioStation.name)'></p>
          <p class="radio-station-dj detail-info text-overflow" v-html='replaceKeyword(radioStation.dj.nickname)'></p>
        </a>
      </li>
    </ul>
    <h3 class="radio-title">单期节目</h3>
    <ul>
      <li v-for='radioStation in radioStationProgramsResult'>
        <div class="cover">
          <img :src='radioStation.coverUrl' :alt='radioStation.name'>
        </div>
        <a class="info">
          <p class="radio-station-name text-overflow" v-html='replaceKeyword(radioStation.name)'></p>
          <p class="radio-station-dj detail-info text-overflow">
            <span v-html='replaceKeyword(radioStation.dj.brand)'></span> 
            <span>Vol.{{ radioStation.serialNum }}</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'radio-station-result',
  props: [ 'radioStationResult', 'radioStationProgramsResult', 'replaceKeyword' ],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.radio-station-result .radio-title {
  line-height: 0.5rem;
  background: #eeeff0;
  font-size: 0.24rem;
  color: #5f6061;
  font-weight: normal;
  text-align: left;
  margin-left: -0.2rem;
  padding-left: 0.2rem;
}
</style>
