<template>
  <div class="header">
    <div class="search">
      <span class="microphone" v-show='!searchInputFocus'>
        <i class="icon-microphone"></i>
      </span>
      <form :class='{ "focus-translate": searchInputFocus }' @submit='submitSearch'>
        <i class="icon-search"></i>
        <input type="text" class="search-input" placeholder="搜索音乐、歌词、电台" spellcheck='false' @focus='searchInputGetFocus' :value='keyword' @input='changeKeyword($event.target.value)'>
        <i class="icon icon-delete_02" v-show='!isKeywordEmpty' @click='changeKeyword("")'></i>
      </form>
      <MusicPlayingLink v-show='!searchInputFocus'></MusicPlayingLink>
      <span class="cancel-input" v-show='searchInputFocus' @click='cancelSearch'>取消</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MusicPlayingLink from '@/components/MusicPlayingLink';
export default {
  name: 'IndexHeader',
  data () {
    return {
    
    }
  },
  components: {
    // 播放器routerLink
    'MusicPlayingLink': MusicPlayingLink
  },
  computed: {
    ...mapState({
      // 是否获焦
      searchInputFocus (state) {
        return state.SearchMessage.searchInputFocus;
      },
      // 关键字
      keyword (state) {
        return state.SearchMessage.keyword;
      }
    }),
    // 关键字是否为空
    isKeywordEmpty () {
      return this.keyword === '';
    }
  },
  watch: {
    keyword () {

    }
  },
  methods: {
    // 改变获焦状态
    searchInputGetFocus () {
      this.$store.commit('SearchMessage/changeSearchInputFocus', {
        data: true
      });
      this.$store.commit('SearchMessage/changeSearchResultDisplay', {
        data: false
      });
    },
    // 改变关键字
    changeKeyword (newKeyword) {
      this.$store.commit('SearchMessage/changeKeyword', {
        data: newKeyword
      });
    },

    // 确定提交搜索关键字搜索，显示搜索结果页面
    submitSearch (event) {
      event.preventDefault();
      this.$store.commit('SearchMessage/changeKeyword', {
        data: this.keyword
      });
      this.$store.commit('SearchMessage/changeSubmitSearchKeyword', {
        data: this.keyword
      });
      this.$store.commit('SearchMessage/changeSearchResultDisplay', {
        data: true
      });
    },

    // 取消按钮，隐藏搜索面板
    cancelSearch () {
      this.$store.commit('SearchMessage/changeSearchInputFocus', {
        data: false
      });
      this.$store.commit('SearchMessage/changeSearchResultDisplay', {
        data: false
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.88rem;
  background: #d43c33;
  position: relative;
}

.search .microphone {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
}

.search .microphone .icon-microphone {
  display: inline-block;
  width: 0.34rem;
  height: 0.47rem;
  background: url('../../../assets/images/microphone1.png') no-repeat;
  background-size: cover;
  vertical-align: middle;
}

.search form {
  position: relative;
  transition: all 0.3s ease;
}

.search form.focus-translate {
  transform: translateX(-0.6rem);
}

.search form .search-input {
  width: 6rem;
  height: 0.6rem;
  padding: 0.05rem 0.4rem 0.05rem 0.55rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.3rem;
  outline: none;
  font-size: 0.24rem;
  color: #666;
}
.search form .search-input::-webkit-input-placeholder {
  /*text-align: center;*/
}
.search form .icon-search {
  display: block;
  width: 0.28rem;
  height: 0.28rem;
  background: url('../../../assets/images/icon-input-search.png') no-repeat;
  background-size: cover;
  position: absolute;
  top: 0.16rem; left: 0.2rem;
}

.search form .icon-delete_02 {
  width: 0.28rem;
  height: 0.28rem;
  background-image: url('../../../assets/images/icon-delete_02.png');
  position: absolute;
  top: 0.16rem; right: 0.1rem;
}

.search .cancel-input {
  color: #fff;
  position: absolute;
  right: 0.3rem;
}
</style>
