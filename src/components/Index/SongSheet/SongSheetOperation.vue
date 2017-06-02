<template>
  <div class="songsheet-operation">
    <ul class="operation-list">
      <li>
        <a href="###">
          <i class="icon-collection"></i>
          <p>7777</p>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon-comment"></i>
          <p>7777</p>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon-share"></i>
          <p>7777</p>
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
  data () {
    return {
      
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

.operation-list li a i.icon-share {
  width: 0.36rem;
  height: 0.4rem;
  background-image: url('../../../assets/images/icon-share.png');
}

.operation-list li a i.icon-download {
  width: 0.42rem;
  height: 0.36rem;
  background-image: url('../../../assets/images/icon-download.png');
}

.operation-list li a p {
  color: #ddd;
  font-size: 0.24rem;
  margin: 0.1rem 0;
}
</style>
