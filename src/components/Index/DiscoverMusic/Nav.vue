<template>
  <nav class="nav">
    <ul>
      <li v-for="(title, index) in navTitle" @click='changeActive(index, $event)' :key='index' :class='{ "active" : activeIndex === index }'>
        <a href="###"><span>{{ title }}</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      navTitle: ['个性推荐', '歌单', '主播电台', '排行榜'],
      activeIndex: 0
    }
  },
  methods: {
    changeActive (index, event) {
      // var list = Array.from(event.currentTarget.parentNode.children);
      // list.forEach((li) => {
      //   li.classList.remove('active');
      // });
      // event.currentTarget.classList.add('active');

      this.activeIndex = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 0.88rem;
  z-index: 999;
  overflow: hidden;
}

.nav:before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: -1;
  background: rgba(255,255,255,1);
  filter: blur(0.2rem);
  margin: -0.15rem;
}

.nav ul {
  display: flex;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 0.01rem solid #dfdfdf;
  box-sizing: border-box;
  font-size: 0.30rem;
}

.nav ul li {
  flex: 1;
}

.nav ul li a {
  display: block;
  color: inherit;
}

.nav ul li a span {
  display: inline-block;
  height: 0.8rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
}

.nav ul li.active a span{
  color: #d33a31;
  border-bottom: 0.04rem solid #d33a31;
}
</style>
