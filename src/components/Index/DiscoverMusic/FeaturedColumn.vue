<template>
  <div class="featured-column">
    <h2 class="section-title">精选专栏<i class="icon-arrow"></i></h2>
    <p class="loading-text" v-if='loading'>正在加载...</p>
    <ul class="column-list" v-else>
      <li v-for='column in featuredColumnData'>
        <a href="###">
          <div class="column-info">
            <div class="column-title">
              <p><span class="icon-column">专栏</span>{{ column.name }}</p>
            </div>
            <p class="reading-count">阅读 {{ toTenThousandUnits(column.listenerCount) }}</p>
          </div>
          <div class="column-cover">
            <img :src='column.coverUrl' :alt='column.name'>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'featured-column',
  props: [ 'featuredColumnData' ],
  data () {
    return {
      
    }
  },
  computed: {
    loading: function () {
      return this.featuredColumnData.length === 0;
    }
  },
  methods: {
    toTenThousandUnits: function (num) {
      return num > 100000 ? (num / 10000).toFixed(1) + '万' : num;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column-list {
  border-top: 0.01rem solid #e1e2e3;
  padding-bottom: 0.31rem;
}

.column-list li {
  height: 1.63rem;
  border-bottom: 0.01rem solid #e1e2e3;
  box-sizing: border-box;
  margin-bottom: 0.05rem;
}

.column-list li a {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.column-list li a .column-info {
  width: 4.3rem;
  height: 100%;
  padding: 0 0.15rem;
  text-align: left;
}

.column-list li a .column-info .column-title {
  height: 0.8rem;
  overflow: hidden;
  margin: 0.15rem 0;
  padding-top: 0.05rem;
}

.column-list li a .column-info .column-title p {
  font-size: 0.28rem;
}

.column-list li a .column-info .column-title p .icon-column {
  font-size: 0.2rem;
  color: #d43c33;
  padding: 0.04rem;
  margin-right: 0.08rem;
  border: 0.01rem solid #d43c33;
  vertical-align: text-top;
}

.column-list li a .column-info .reading-count {
  font-size: 0.24rem;
  color: #999;
}

.column-list li a .column-cover {
  width: 2.46rem;
  height: 100%;
}
</style>
