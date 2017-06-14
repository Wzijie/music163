<template>
<transition name='fade'>
  <div class="search-message" v-show='searchInputFocus'>
    <template v-if='isKeywordEmpty'>
      <div class="singer-category">
        <a>
          <i class="icon icon-singer"></i>
          <p>歌手分类 &gt;</p>
        </a>
      </div>
      <div class="hot-search">
        <h2>热门搜索</h2>
        <ul class="hot-search-list">
          <li>热门搜索</li>
          <li>热门搜索</li>
          <li>热门搜索</li>
          <li>热门搜索</li>
          <li>热门搜索</li>
          <li>热门搜索</li>
          <li>热门搜索</li>
        </ul>
      </div>
      <ul class="history-search">
        <li>
          <i class="icon icon-history"></i>
          <a class="text-overflow">历史搜索</a>
          <div class="delete">
            <i class="icon icon-delete translate-center"></i>
          </div>
        </li>
        <li>
          <i class="icon icon-history"></i>
          <a class="text-overflow">历史搜索</a>
          <div class="delete">
            <i class="icon icon-delete translate-center"></i>
          </div>
        </li>
      </ul>
    </template>
    <div class="search-suggest" v-else>
      <a class="direct-search text-overflow">搜索 “ {{ keyword }} ”</a>
      <ul class="suggest-list">
        <li v-for='suggest in suggestList'>
          <i class="icon icon-search_02"></i>
          <a class="text-overflow">{{ suggest.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</transition>
</template>

<script>
import { mapState } from 'vuex';
import ajaxRequest from '@/plugs/ajaxRequest';
export default {
  name: 'search-message',
  data () {
    return {
      suggestList: []
    }
  },
  computed: {
    ...mapState({
      searchInputFocus (state) {
        return state.SearchMessage.searchInputFocus;
      },
      keyword (state) {
        return state.SearchMessage.keyword;
      }
    }),
    isKeywordEmpty () {
      return this.keyword === '';
    }
  },
  watch: {
    keyword () {
      if (this.keyword === '') {
        return;
      }
      this.suggestList.splice(0, this.suggestList.length);
      this.getSuggestList();
    }
  },
  methods: {
    getSuggestList () {
      var suggestSuccess = (data) => {
        console.log(data, '搜索建议');
        var tmparr = [];
        Object.keys(data.result).forEach((objkey) => {
          if (objkey === 'order') {
            return;
          }
          tmparr.push(...data.result[objkey]);
        });
        this.suggestList.push(...tmparr);
      }
      var suggestError = (error) => {
        console.log(error);
      }
      var suggestURL = `http://localhost:3000/search/suggest?keywords=${this.keyword}`;
      ajaxRequest(suggestURL, 'GET', suggestSuccess, suggestError);
    }
  }
}
</script>

<style scoped>
.search-message {
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  margin-top: 0.88rem;
  background: #fff;
  z-index: 998;
}

.singer-category {
  height: 0.91rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #ccc;
}

.singer-category a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.singer-category a p {
  margin-left: 0.1rem;
  font-size: 0.32rem;
  color: #666;
}

.hot-search {
  padding: 0.35rem 0.2rem;
  text-align: left;
}

.hot-search h2 {
  font-size: 0.3rem;
  color: #666;
  font-weight: normal;
}

.hot-search .hot-search-list {
  padding: 0.15rem 0;
}

.hot-search .hot-search-list li {
  display: inline-block;
  padding: 0.13rem 0.3rem;
  margin: 0 0.16rem 0.16rem 0;
  border: 0.01rem solid #ccc;
  border-radius: 0.6rem;
  background: #f5f6f7;
  font-size: 0.32rem;
  text-align: center;
}

.history-search {
  padding-left: 0.2rem;
}

.history-search li {
  display: flex;
  align-items: center;
  height: 0.85rem;
  border-bottom: 0.01rem solid #ccc;
  text-align: left;
}

.history-search li i.icon-history {
  min-width: 0.48rem;
}

.history-search li a {
  display: block;
  width: 100%;
  margin: 0 0.2rem;
}

.history-search li .delete {
  min-width: 0.74rem;
  height: 100%;
  position: relative;
}

.history-search li .delete i.icon-delete {
  width: 0.42rem;
  height: 0.42rem;
}

.search-suggest {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.search-suggest .direct-search {
  display: block;
  height: 0.88rem;
  min-height: 0.88rem;
  line-height: 0.88rem;
  margin-left: 0.2rem;
  border-bottom: 0.01rem solid #ccc;
  color: #5883b2;
  text-align: left;
}

.suggest-list {
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 1rem;
}

.suggest-list li {
  display: flex;
  align-items: center;
  height: 0.85rem;
}

.suggest-list li i.icon-search_02 {
  width: 0.36rem;
  min-width: 0.36rem;
  height: 0.36rem; 
  margin: 0 0.2rem;
}

.suggest-list li a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 0.85rem;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
}






.icon-singer {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../../assets/images/icon-singer.png');
}

.icon-history {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../../assets/images/icon-history.png');
}

.icon-search_02 {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../../assets/images/icon-search_02.png');
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter, .fade-leave-active {
  /*opacity: 0;*/
  transform: translateY(100%);
}
</style>
