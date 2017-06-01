<template>
  <div class="sub-menu">
    <ul>
      <li class="menu-item">
        <a href="###">
          <span>
            <i class="icon-privateFM"></i>
          </span>
          <p>私人FM</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="###">
          <span>
            <i class="icon-cd"></i>
          </span>
          <p>开启个性推荐</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="###">
          <span>
            <i class="icon-hot-rank"></i>
          </span>
          <p>云音乐热歌榜</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-menu {
  height: 2.07rem;
  border-bottom: 0.001rem solid #dfdfdf;
}

.sub-menu ul {
  display: flex;
  justify-content: space-around;
  height: 100%;
}

.sub-menu ul li.menu-item {
  flex: 1;
}

.sub-menu ul li.menu-item a {
  display: inline-block;
  height: 100%;
  font-size: 0.24rem;
  color: inherit;
}

.sub-menu ul li.menu-item a span {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  box-sizing: border-box;
  border: 0.02rem solid #d33a31;
  border-radius: 50%;
  margin: 0.3rem 0 0.15rem;
}

.sub-menu ul li.menu-item a span i{
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.275rem;
  background-size: contain;
  background-repeat: no-repeat;
}

.sub-menu ul li.menu-item a span i.icon-privateFM{
  background-image: url('../../../assets/images/private_FM.png');
}
.sub-menu ul li.menu-item a span i.icon-cd{
  background-image: url('../../../assets/images/icon-cd.png');
}
.sub-menu ul li.menu-item a span i.icon-hot-rank{
  background-image: url('../../../assets/images/icon-hot-rank.png');
}

.sub-menu ul li.menu-item a p {
  
}
</style>
