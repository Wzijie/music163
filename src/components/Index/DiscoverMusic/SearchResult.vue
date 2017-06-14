<template>
  <div class="search-result">
    <div class="filter-option">
      <ul class="option-list">
        <li>
          <a class="active">单曲</a>
        </li>
        <li>
          <a>单曲</a>
        </li>
        <li>
          <a>单曲</a>
        </li>
        <li>
          <a>单曲</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-result',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.search-result {
  position: fixed;
  top: 0.88rem; left: 0; bottom: 0; right: 0;
  z-index: 999;
  background: #fff;
}

.filter-option {
  height: 0.8rem;
  background: #f8f8f9;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}

.filter-option .option-list {
  height: 100%;
  line-height: 0.8rem;
  text-align: left;
}

.filter-option .option-list li {
  display: inline-block;
  width: 1.66rem;
  height: 100%;
  text-align: center;
}

.filter-option .option-list li a {
  display: inline-block;
  height: 100%;
  padding: 0 0.1rem;
  box-sizing: border-box;
  font-size: 0.3rem;
}

.filter-option .option-list li a.active {
  color: #d43c33;
  border-bottom: 0.04rem solid #d43c33;
}
</style>
