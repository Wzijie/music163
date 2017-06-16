<template>
  <ul class="singer-result result-list most-result">
    <li v-for='singer in singerResult'>
      <div class="singer-cover cover">
        <img :src='singer.img1v1Url' :alt='singer.name'>
      </div>
      <a class="singer-info info">
        <p class="singer-name">{{ singer.name }} <span v-if='isAlias(singer)'>({{ isAlias(singer) }})</span></p>
        <div class="settled-in" v-if='isAccountId(singer)'>
          <span class="icon-box">
            <i class="icon icon-user_03 translate-center"></i>
          </span>
          <span>已入驻</span>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'singer-result',
  props: [ 'singerResult' ],
  data () {
    return {

    }
  },
  methods: {
    isAlias (singer) {
      if (singer.trans !== null && singer.trans !== undefined) {
        return singer.trans;
      }
      if (singer.alias.length !== 0) {
        return singer.alias[0];
      }
      return false;
    },
    isAccountId (singer) {
      return singer.accountId !== undefined;
    }
  }
}
</script>

<style scoped>
.singer-result {

}

.singer-result li {

}

.singer-result li .singer-cover {

}

.singer-result li .singer-info {

}

.singer-result li .singer-info .singer-name {
  flex: 1;
  font-size: 0.3rem;
}

.singer-result li .singer-info .singer-name span {
  color: #7d7d7f;
}

.singer-result li .singer-info .settled-in {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  min-width: 1.6rem;
  font-size: 0.24rem;
  color: #999;
}

.singer-result li .singer-info .settled-in .icon-box {
  display: inline-block;
  width: 0.28rem;
  height: 0.28rem;
  background: #d43c33;
  border-radius: 50%;
  margin-right: 0.05rem;
  position: relative;
}

.icon-user_03 {
  width: 0.16rem;
  height: 0.16rem;
  background-image: url('../../../../assets/images/icon-user_03.png');
}
</style>
