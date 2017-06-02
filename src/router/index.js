import Vue from 'vue';
import Router from 'vue-router';
// 主页首页
import Index from '@/components/Index/Index';
// 发现音乐
import DiscoverMusic from '@/components/Index/DiscoverMusic/DiscoverMusic';
// 我的音乐
import MyMusic from '@/components/Index/MyMusic/MyMusic';
// 歌单
import SongSheet from '@/components/Index/SongSheet/SongSheet';
// 音乐播放
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/DiscoverMusic'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          component: DiscoverMusic
        },
        {
          path: 'DiscoverMusic',
          component: DiscoverMusic
        },
        {
          path: 'MyMusic',
          component: MyMusic
        },
        {
          path: 'SongSheet',
          component: SongSheet
        }
      ]
    },
    {
      path: '/MusicPlayer',
      name: 'music-player',
      component: MusicPlayer
    }
  ]
})
