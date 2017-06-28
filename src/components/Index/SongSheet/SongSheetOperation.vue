<template>
  <div class="songsheet-operation">
    <ul class="operation-list">
      <li>
        <a href="###">
          <i class="icon-collection"></i>
          <p>{{ songsheetInfoLoading.subscribedCount }}</p>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon-comment"></i>
          <p>{{ songsheetInfoLoading.commentCount }}</p>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon-share"></i>
          <p>{{ songsheetInfoLoading.shareCount }}</p>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon-download"></i>
          <p>下载</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'songsheet-operation',
  props: [ 'songsheetData' ],
  data () {
    return {
      
    }
  },
  computed: {
    songsheetInfoLoading: function () {
      var loadingObj = {
        subscribedCount: '正在加载...',
        commentCount: '正在加载...',
        shareCount: '正在加载...'
      }
      if (this.songsheetData === undefined) {
        return loadingObj;
      }
      if (Object.keys(this.songsheetData).length !== 0) {
        if (this.songsheetData.subscribedCount === undefined) {
          this.songsheetData.subscribedCount = 0;
        }
        return this.songsheetData;
      } else {
        return loadingObj;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.songsheet-operation {
  height: 1rem;
}

.operation-list {
  display: flex;
  height: 100%;
}

.operation-list li {
  width: 25%;
  height: 100%;
}

.operation-list li a {
  display: block;
  height: 100%;
}

.operation-list li a i {
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
}

.operation-list li a i.icon-collection {
  width: 0.4rem;
  height: 0.36rem;
  background-image: url('../../../assets/images/icon-collection.png');
}

.operation-list li a i.icon-comment {
  width: 0.43rem;
  height: 0.4rem;
  background-image: url('../../../assets/images/icon-comment.png');
}

.operation-list li a p {
  color: #ddd;
  font-size: 0.24rem;
  margin: 0.1rem 0;
}
</style>
