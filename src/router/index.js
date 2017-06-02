import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index/Index';
import DiscoverMusic from '@/components/Index/DiscoverMusic/DiscoverMusic';
import MyMusic from '@/components/Index/MyMusic/MyMusic';
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
