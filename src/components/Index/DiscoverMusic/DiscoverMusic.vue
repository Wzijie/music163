<template>
  <div class="discover-music">
    <IndexHeader></IndexHeader>
    <NavMenu></NavMenu>
    <Banner :banner-data='bannerData'></Banner> 
    <SubMenu></SubMenu>
    <RecommendSongSheet :recommend-song-sheet-data='recommendSongSheetData'></RecommendSongSheet>
    <ExclusiveBroadcast :exclusive-broadcast-data='exclusiveBroadcastData'></ExclusiveBroadcast>
    <NewestMusic :newest-music-data='newestMusicData'></NewestMusic>
    <RecommendMV :recommend-mv-data='recommendMvData'></RecommendMV>
    <FeaturedColumn :featured-column-data='featuredColumnData'></FeaturedColumn>
    <AnchorStation :anchor-station-data='anchorStationData'></AnchorStation>
    <SearchMessage></SearchMessage>
    <SearchResult></SearchResult>
  </div>
</template>

<script>

import IndexHeader from './IndexHeader';
import Nav from './Nav';
import Banner from './Banner';
import SubMenu from './SubMenu';
import RecommendSongSheet from './RecommendSongSheet';
import ExclusiveBroadcast from './ExclusiveBroadcast';
import NewestMusic from './NewestMusic';
import RecommendMV from './RecommendMV';
import FeaturedColumn from './FeaturedColumn';
import AnchorStation from './AnchorStation';
import SearchMessage from './SearchMessage';
import SearchResult from './SearchResult';

import ajaxRequest from '@/plugs/ajaxRequest.js';

export default {
  name: 'discover-music',
  data () {
    return {
      bannerData: [],
      recommendSongSheetData: [],
      exclusiveBroadcastData: [],
      newestMusicData: [],
      recommendMvData: [],
      featuredColumnData: [],
      anchorStationData: []
    }
  },
  components: {
    'IndexHeader': IndexHeader,
    'NavMenu': Nav,
    'Banner': Banner,
    'SubMenu': SubMenu,
    'RecommendSongSheet': RecommendSongSheet,
    'ExclusiveBroadcast': ExclusiveBroadcast,
    'NewestMusic': NewestMusic,
    'RecommendMV': RecommendMV,
    'FeaturedColumn': FeaturedColumn,
    'AnchorStation': AnchorStation,
    'SearchMessage': SearchMessage,
    'SearchResult': SearchResult
  },
  mounted () {
    // 焦点图数据
    var bannerDataSuccess = (data) => {
      console.log(data.banners.slice(), '焦点图数据');
      this.bannerData.push(...data.banners);
    }
    var bannerDataError = (error) => {
      console.log(error, '请求焦点图数据错误');
    }
    var bannerDataURL = 'http://localhost:3000/banner';

    ajaxRequest(bannerDataURL, 'GET', bannerDataSuccess, bannerDataError);

    // 推荐歌单数据
    var recommendSongSheetSuccess = (data) => {
      console.log(data, '推荐歌单数据');
      this.recommendSongSheetData.push(...data.result.slice(0, 6));
      console.log(this.$store.state);
      this.$store.commit('songSheet/addRecommendSongSheet', {
        data: data.result.slice(0, 6)
      });
    }
    var recommendSongSheetError = (error) => {
      console.log(error, '请求推荐歌单数据错误');
    }
    var recommendSongSheetURL = 'http://localhost:3000/personalized';

    ajaxRequest(recommendSongSheetURL, 'GET', recommendSongSheetSuccess, recommendSongSheetError);

    // 独家放送数据
    var exclusiveBroadcastSuccess = (data) => {
      console.log(data, '独家放送数据');
      this.exclusiveBroadcastData.push(...data.result.slice(0, 3));
    }
    var exclusiveBroadcastError = (error) => {
      console.log(error, '请求独家放送数据错误');
    }
    var exclusiveBroadcastURL = 'http://localhost:3000/personalized/privatecontent';

    ajaxRequest(exclusiveBroadcastURL, 'GET', exclusiveBroadcastSuccess, exclusiveBroadcastError);

    // 最新音乐数据
    var newestMusicSuccess = (data) => {
      console.log(data, '最新音乐数据');
      this.newestMusicData.push(...data.result.slice(0, 6));
    }
    var newestMusicError = (error) => {
      console.log(error, '请求最新音乐数据错误');
    }
    var newestMusicURL = 'http://localhost:3000/personalized/newsong';

    ajaxRequest(newestMusicURL, 'GET', newestMusicSuccess, newestMusicError);

    // 推荐MV数据
    var recommendMvSuccess = (data) => {
      console.log(data, '推荐MV数据');
      this.recommendMvData.push(...data.result.slice(0, 4));
    }
    var recommendMvError = (error) => {
      console.log(error, '请求推荐MV数据错误');
    }
    var recommendMvURL = 'http://localhost:3000/personalized/mv';

    ajaxRequest(recommendMvURL, 'GET', recommendMvSuccess, recommendMvError);

    // 精选专栏数据
    var featuredColumnSuccess = (data) => {
      console.log(data, '精选专栏数据');
      this.featuredColumnData.push(...data.programs.slice(0, 3));
    }
    var featuredColumnError = (error) => {
      console.log(error, '请求精选专栏数据错误');
    }
    var featuredColumnURL = 'http://localhost:3000/program/recommend';

    ajaxRequest(featuredColumnURL, 'GET', featuredColumnSuccess, featuredColumnError);

    // 主播电台数据
    var anchorStationSuccess = (data) => {
      console.log(data, '主播电台数据');
      this.anchorStationData.push(...data.result.slice(0, 6));
    }
    var anchorStationError = (error) => {
      console.log(error, '请求主播电台数据错误');
    }
    var anchorStationURL = 'http://localhost:3000/personalized/djprogram';

    ajaxRequest(anchorStationURL, 'GET', anchorStationSuccess, anchorStationError);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
