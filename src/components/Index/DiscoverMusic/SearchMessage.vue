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
          <li v-for='hot in hotSearch' @click='submitSearch(hot)'>{{ hot }}</li>
        </ul>
      </div>
      <ul class="history-search">
        <li v-for='(history, index) in historySearch'>
          <i class="icon icon-history"></i>
          <a class="text-overflow" @click='submitSearch(history)'>{{ history }}</a>
          <div class="delete" @click='deleteHistorySearch(index)'>
            <i class="icon icon-delete translate-center"></i>
          </div>
        </li>
      </ul>
    </template>
    <div class="search-suggest" v-else>
      <a class="direct-search text-overflow" @click='submitSearch(keyword)'>搜索 “ {{ keyword }} ”</a>
      <ul class="suggest-list">
        <li v-for='suggest in suggestList'>
          <i class="icon icon-search_02"></i>
          <a class="text-overflow" @click='submitSearch(suggest.name)'>{{ suggest.name }}</a>
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
      // 搜索建议
      suggestList: [],
      hotSearch: ['周杰伦', '天空之城', '风之谷']
      // historySearch: localStorage.historySearch ? JSON.parse(localStorage.historySearch) : []
    }
  },
  computed: {
    ...mapState({
      // 搜索输入表单是否获焦
      searchInputFocus (state) {
        return state.SearchMessage.searchInputFocus;
      },
      // 表单输入的搜索关键字
      keyword (state) {
        return state.SearchMessage.keyword;
      },

      historySearch (state) {
        return state.SearchMessage.historySearch;
      }
    }),
    // 关键字是否为空
    isKeywordEmpty () {
      return this.keyword === '';
    }
  },
  watch: {
    // 关键字变动则请求搜索建议
    keyword () {
      if (this.keyword === '') {
        return;
      }
      this.suggestList.splice(0, this.suggestList.length);
      this.getSuggestList();
    },
    historySearch () {
      localStorage.historySearch = JSON.stringify(this.historySearch);
    }
  },
  methods: {
    // 获取搜索建议
    getSuggestList () {
      var suggestSuccess = (data) => {
        console.log(data, '搜索建议');
        var tmparr = [];
        // 搜索建议数据分为多个数组，搜索结果同时包含单曲,歌手,歌单,mv信息
        // 将所有数组合并 ‘order’属性存放的不是需要的数据
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
      var suggestURL = `http://119.23.246.148:3001/search/suggest?keywords=${this.keyword}`;
      ajaxRequest(suggestURL, 'GET', suggestSuccess, suggestError);
    },
    // 确定提交搜索关键字搜索，显示搜索结果页面
    submitSearch (keyword) {
      // 改变当前搜索关键字
      this.$store.commit('SearchMessage/changeKeyword', {
        data: keyword
      });
      // 确定搜索关键字
      this.$store.commit('SearchMessage/changeSubmitSearchKeyword', {
        data: keyword
      });
      // 显示搜索结果
      this.$store.commit('SearchMessage/changeSearchResultDisplay', {
        data: true
      });
      // 添加搜索历史
      if (this.historySearch.indexOf(keyword) === -1) {
        this.$store.commit('SearchMessage/addHistorySearch', {
          data: keyword
        });
      } 
    },

    // 删除搜索历史
    deleteHistorySearch (index) {
      this.$store.commit('SearchMessage/deleteHistorySearch', {
        data: index
      });
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
