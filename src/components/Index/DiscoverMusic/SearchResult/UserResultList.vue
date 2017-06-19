<template>
  <ul class="user-result result-list most-result">
    <li v-for='user in userResult'>
      <div class="cover">
        <img :src='user.avatarUrl' :alt='user.nickname'>
        <i class="icon icon-vip" v-if='user.vipType === 0'></i>
      </div>
      <a class="info">
        <p class="username text-overflow">
          <span v-html='replaceKeyword(user.nickname)'></span>
          <i class="icon icon-male" v-if='user.gender === 1'></i>
          <i class="icon icon-female" v-else></i>
        </p>
        <p class="user-signature detail-info text-overflow" v-html='replaceKeyword(user.signature)'></p>
      </a>
      <div class="follow">+ 关 注</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'user-result',
  props: [ 'userResult', 'replaceKeyword' ],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.user-result li {
  position: relative;
}

.user-result li div.cover {
  position: relative;
}

.user-result li div.cover img {
  border-radius: 50%;
}

.user-result li div.cover .icon-vip {
  width: 0.32rem;
  height: 0.32rem;
  background-image: url('../../../../assets/images/icon-vip.png');
  position: absolute;
  bottom: 0; right: 0;
  transform: translate(20%, 5%);
}

.user-result li a.info {
  padding-right: 1.62rem;
}

.user-result li a.info p.username .icon-male {
  width: 0.22rem;
  height: 0.22rem;
  background-image: url('../../../../assets/images/icon-male.png');
}

.user-result li a.info p.username .icon-female {
  width: 0.22rem;
  height: 0.22rem;
  background-image: url('../../../../assets/images/icon-female.png');
}

.user-result li .follow {
  width: 1.22rem;
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #d33a31;
  border: 0.01rem solid #ccc;
  border-radius: 0.25rem;
  text-align: center;
  position: absolute;
  right: 0.2rem;
}
</style>
