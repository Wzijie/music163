<template>
  <div class="index-nav">
    <ul>
      <li v-for='(navItem, index) in indexNavInfo'>
        <router-link :to='navItem.routerLink'>
          <i :class='navItem.iconClass'></i>
          <p>{{ navItem.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index-nav',
  data () {
    return {
      indexNavInfo: [
        { title: '发现音乐', iconClass: 'icon-discover-music', routerLink: '/index/DiscoverMusic' },
        { title: '我的音乐', iconClass: 'icon-my-music', routerLink: '/index/MyMusic' },
        { title: '朋友', iconClass: 'icon-friend', routerLink: '###' },
        { title: '账号', iconClass: 'icon-user', routerLink: '###' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0.2rem;
  color: #fff;
  background: rgba(0,0,0,0.8);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
}

.index-nav ul {
  display: flex;
  height: 0.98rem;
}

.index-nav ul li {
  flex: 1;
  height: 100%;
}

.index-nav ul li a {
  display: block;
  height: 100%;
  opacity: 0.5;
}

.index-nav ul li a.router-link-active {
  opacity: 1;
}

.index-nav ul li a i {
  display: inline-block;
  margin-top: 0.1rem;
}

.index-nav ul li a i.icon-discover-music {
  width: 0.43rem;
  height: 0.48rem;
  background: url('../../assets/images/icon-discover-music.png') no-repeat;
  background-size: cover;
}

.index-nav ul li a i.icon-my-music {
  width: 0.46rem;
  height: 0.46rem;
  background: url('../../assets/images/icon-my-music.png') no-repeat;
  background-size: cover;
}

.index-nav ul li a i.icon-friend {
  width: 0.5rem;
  height: 0.46rem;
  background: url('../../assets/images/icon-friend.png') no-repeat;
  background-size: cover;
}

.index-nav ul li a i.icon-user {
  width: 0.4rem;
  height: 0.46rem;
  background: url('../../assets/images/icon-user.png') no-repeat;
  background-size: cover;
}
</style>
