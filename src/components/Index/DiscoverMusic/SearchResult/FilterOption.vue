<template>
  <div class="filter-option" @touchmove='dragList' @touchstart='touchStartList' @touchend='touchEndList'>
    <ul class="option-list" :style='{ transform: `translateX(${diff / 100}rem)` }' :class='{ transition: isTransition }'>
      <li v-for='(type, index) in filterType' @click='changeSearchType(type, index)'>
        <a :class='{"active": index === searchFilterIndex}'>{{ type }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filter-option',
  props: [ 'searchFilterIndex' ],
  data () {
    return {
      filterType: ['单曲', '歌手', '专辑', '歌单', 'MV', '主播电台', '用户'],

      // 列表拖动功能state start
      // 移动的距离
      diff: 0,
      // 触摸开始时的X坐标
      touchStartPageX: 0,
      // 触摸结束时记录移动的距离
      touchEndDiff: 0,
      // 触摸开始时的时间戳
      touchStartTime: 0,
      // 触摸结束时的时间戳
      touchEndTime: 0,
      // 是否添加过渡动画
      isTransition: true
      // 列表拖动功能state end
    }
  },
  methods: {
    changeSearchType (type, index) {
      this.$store.commit('SearchMessage/changeSearchType', {
        data: type
      });
      this.$store.commit('SearchMessage/changeSearchFilterIndex', {
        data: index
      });
    },

    // 列表拖动功能methods start
    touchStartList (event) {
      // touchstart记录X坐标、时间戳、取消过渡动画
      this.touchStartPageX = event.touches[0].pageX;
      this.touchStartTime = event.timeStamp;
      this.isTransition = false;
    },
    dragList (event) {
      // touchmove设置移动的距离
      // 保存的当前位置 + 拖动的偏差值 
      this.diff = this.touchEndDiff + (event.touches[0].pageX - this.touchStartPageX);
    },
    touchEndList (event) {
      this.touchEndTime = event.timeStamp;
      this.isTransition = true;

      // 如果拖动的时间小于500毫秒，再位移300px
      if (this.touchEndTime - this.touchStartTime < 500) {
        if (event.changedTouches[0].pageX - this.touchStartPageX > 0) {
          this.diff += 200;
        } else if (event.changedTouches[0].pageX - this.touchStartPageX < 0) {
          this.diff -= 200;
        }
      }
      // 超出最小最大范围，移动回最小最大范围
      // 0为最右 设100是给出空间
      // 400为最右， 应当是列表的宽度
      if (this.diff > 100) {
        setTimeout(() => {
          this.diff = 0;
          this.touchEndDiff = this.diff;
        }, 500);
      }
      if (this.diff < -450) {
        setTimeout(() => {
          this.diff = -410;
          this.touchEndDiff = this.diff;
        }, 500);
      }

      this.touchEndDiff = this.diff;
    }
    // 列表拖动功能methods end
  }
}
</script>

<style scoped>
.filter-option {
  height: 0.8rem;
  min-height: 0.8rem;
  background: #f8f8f9;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}

.filter-option .option-list {
  height: 100%;
  line-height: 0.8rem;
  text-align: left;
  white-space: nowrap;
}

.filter-option .transition {
  transition: all 0.5s ease;
}

.filter-option .option-list li {
  display: inline-block;
  width: 1.55rem;
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
