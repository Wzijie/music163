<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {

}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  width: 100%;
  height: 100%;
}

.text-overflow {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.translate-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

.loading-text {
  font-size: 0.38rem;
  padding: 1rem 0;
  background: #fff;
}

.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: cover;
}

/*发现音乐组件的各板块列表 start*/
.section-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.section-list li {
  margin-bottom: 0.36rem;
}

.section-list li a {
  display: block;
}

.section-title {
  font-size: 0.32rem;
  font-weight: normal;
  text-align: left;
  border-left: 0.04rem solid #d43c33;
  padding-left: 0.2rem;
  margin: 0.3rem 0;
}

.section-title .icon-arrow {
  display: inline-block;
  width: 0.16rem;
  height: 0.28rem;
  background: url('./assets/images/icon-arrow.png') no-repeat;
  background-size: cover;
  vertical-align: middle;
  margin-left: 0.18rem;
}
/*发现音乐组件的各板块列表 end*/

/*封面顶部的播放次数 start*/
.play-count {
  width: 100%;
  position: absolute;
  top: 0;
  font-size: 0.28rem;
  color: #fff;
  text-align: right;
  line-height: 2;
  background-color: rgba(0,0,0,0.6);
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.8), rgba(0,0,0,0));
}

.play-count span {
  margin-right: 0.2rem;
}
/*封面顶部的播放次数 end*/

/*耳机图标*/
.icon-headset {
  display: inline-block;
  width: 0.21rem;
  height: 0.19rem;
  background: url('./assets/images/icon-headset.png') no-repeat;
  background-size: cover;
}

.icon-share {
  display: inline-block;
  width: 0.36rem;
  height: 0.4rem;
  background-image: url('./assets/images/icon-share.png');
}

.icon-download {
  width: 0.42rem;
  height: 0.36rem;
  background-image: url('./assets/images/icon-download.png');
}

.icon-loop-list {
  width: 0.48rem;
  height: 0.33rem;
  background: url('./assets/images/icon-loop-list.png') no-repeat;
  background-size: cover;
}

/*歌曲描述*/
.song-descript {
  height: 0.66rem;
  font-size: 0.24rem;
  padding: 0 0.15rem;
  overflow: hidden;
  text-align: left;
}

#app {
  font-size: 0.32rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
