<template>
  <div class='banner'>
    <ul class='slide' v-if='bannerData.length !== 0'>
      <li>
        <a :href='lastBanner.url'>
          <img :src='lastBanner.pic' :alt='lastBanner.typeTitle' />
        </a>
      </li>
      <li v-for='(bannerItem, index) in bannerData' :key='index'>
        <a :href='bannerItem.url'>
          <img :src='bannerItem.pic' :alt='bannerItem.typeTitle' />
        </a>
      </li>
      <li>
        <a :href='firstBanner.url'>
          <img :src='firstBanner.pic' :alt='firstBanner.typeTitle' />
        </a>
      </li>
    </ul> 
    <ul class="slide-active">
      <li v-for='bannerItem in bannerData' :key='bannerItem'></li>
    </ul>
  </div>
</template>

<script>
import slideTouch from '@/plugs/slideTouch';
export default {
  name: 'banner',
  props: [ 'bannerData' ],
  data () {
    return {
  
    }
  },
  computed: {
    firstBanner: function () {
      return this.bannerData[0];
    },
    lastBanner: function () {
      return this.bannerData[this.bannerData.length - 1];
    }
  },
  updated: function () {
    if (this.bannerData.length !== 0) {
      slideTouch('.slide', '.slide-active li', 'active');
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* banner start */
.banner {
  width: 100%;
  height: 2.9rem;
  background: rgba(0,0,0,0.8);
  overflow: hidden;
  position: relative;
  margin-top: 1.66rem;
}

.banner ul.slide {
  height: 100%;
  width: 100%;
  display: flex;
}

.banner ul.slide li {
  min-width: 7.5rem;
  height: 100%;
  background: #000;
}

.banner ul.slide li a {
  display: block;
  width: 100%;
  height: 100%;
}

.banner ul.slide li a img{
  width: 100%;
  height: 100%;
}

.banner ul.slide-active {
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 0.1rem;
  transform: translate(-50%,0);
  padding: 0 0.05rem;
  border-radius: 0.1rem;
  /*background: rgba(0,0,0,0.5);*/
}

.banner ul.slide-active li {
  width: 0.12rem;
  height: 0.12rem;
  margin: 0.04rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.7);
}

.banner ul.slide-active li.active {
  background: #d33a31;
}

.banner .load-tip {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: #f8f8f8;
  text-align: center;
}

.banner .load-tip p {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.16rem;
  color: #666;
}

/* banner end */
</style>
