<template>
  <div class="song-operation">
    <ul>
      <li>
        <i class="icon-like translate-center"></i>
      </li>
      <li>
        <i class="icon-download translate-center"></i>
      </li>
      <li>
        <span class="comment-count translate-center">{{ isMaxTotal }}</span>
        <i class="icon-comment_02 translate-center"></i>
      </li>
      <li>
        <i class="icon-more"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import ajaxRequest from '@/plugs/ajaxRequest';
export default {
  name: 'song-operation',
  props: [ 'songList', 'songIndex' ],
  data () {
    return {
      comments: [],
      hotComments: [],
      commentTotal: 0
    }
  },
  computed: {
    isMaxTotal () {
      return this.commentTotal > 999 ? '999+' : this.commentTotal;
    }
  },
  watch: {
    songIndex () {
      this.comments.splice(0, this.comments.length);
      this.hotComments.splice(0, this.hotComments.length);
      this.commentTotal = 0;
      this.getComments((data) => {
        console.log(data, '评论数据');
        this.comments.push(...data.comments);
        this.hotComments.push(...data.hotComments);
        this.commentTotal = data.total;
      });
    }
  },
  mounted () {
    this.getComments((data) => {
      console.log(data, '评论数据');
      this.comments.push(...data.comments);
      this.hotComments.push(...data.hotComments);
      this.commentTotal = data.total;
    });
  },
  methods: {
    getComments (successHandler) {
      var commentError = (error) => {
        console.log(error);
      }
      var commentURL = `http://119.23.246.148:3001/comment/music?id=${this.songList[this.songIndex].id}`;
      ajaxRequest(commentURL, 'GET', successHandler, commentError);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-operation {
  display: flex;
  justify-content: center;
  height: 0.63rem;
  min-height: 0.63rem;
}

.song-operation ul {
  display: flex;
  width: 6.08rem;
  height: 100%;
}

.song-operation ul li {
  flex: 1;
  height: 100%;
  position: relative;
}

.song-operation ul li i {
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
}

.song-operation ul li i.icon-like {
  width: 0.63rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-like.png');
}

.song-operation ul li i.icon-comment_02 {
  width: 0.43rem;
  height: 0.4rem;
  background-image: url('../../assets/images/icon-comment_02.png');
  left: 45%;
}

.song-operation ul li i.icon-more {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-more.png');
  transform: rotate(90deg);
  position: absolute;
  top: 50%; left: 50%;
  margin: -0.24rem 0 0 -0.24rem;
}

.song-operation ul li .comment-count {
  font-size: 0.22rem;
  color: rgba(255,255,255,0.7);
  transform: translate(10%, -100%);
}
</style>
