<template>
<transition name="fade">
  <div class="song-play-list" v-show='isSongPlayListShow'>
    <div class="control">
      <div class="play-mode operation-btn">
        <i class="icon icon-loop-list"></i>
        <span>列表循环</span>
      </div>
      <div class="collection-clear-box">
        <div class="song-collection operation-btn">
          <i class="icon icon-collection_02"></i>
          <span>收藏</span>
        </div>
        <div class="list-clear operation-btn">
          <i class="icon icon-trash"></i>
          <span>清空</span>
        </div>
      </div>
    </div>
    <ul class="song-list">
      <li v-for='(song, index) in songList'>
        <i class="icon icon-volume_02" v-if='songActive(index)'></i>
        <a @click='changeSongIndex(index)'>
          <p class="text-overflow" :class='{ "active-song": songActive(index) }'>{{ song.name }}<span v-if='songComeFrom(song.alia, song.tns)'> - {{ songComeFrom(song.alia, song.tns) }}</span></p>
        </a>
        <div class="song-delete">
          <i class="icon icon-delete translate-center"></i>
        </div>
      </li>
    </ul>
  </div>
</transition>  
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'song-play-list',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      songList (state) {
        return state.MusicPlayer.songList;
      },
      songIndex (state) {
        return state.MusicPlayer.songIndex;
      },
      isSongPlayListShow (state) {
        return state.MusicPlayer.isSongPlayListShow;
      }
    })
  },
  methods: {
    // 歌曲出处, 值存放在song.alia或者song.tns中, 都是数组
    songComeFrom (comeFromAlia, comeFromTns) {
      if (comeFromTns !== undefined) {
        return comeFromTns[0];
      } else if (comeFromAlia && comeFromAlia[0]) {
        return comeFromAlia[0];
      } else {
        return false;
      }
    },

    changeSongIndex (songIndex) {
      this.$store.commit('MusicPlayer/changeSongIndex', {
        data: songIndex
      });
    },

    songActive (index) {
      return this.songIndex === index;
    }
  }
}
</script>

<style scoped>
.icon-loop-list {
  width: 0.43rem;
  height: 0.3rem;
  background-image: url('../../assets/images/icon-loop-list_02.png');
}

.icon-collection_02 {
  width: 0.36rem;
  height: 0.35rem;
  background-image: url('../../assets/images/icon-collection_02.png');
}

.icon-trash {
  width: 0.34rem;
  height: 0.34rem;
  background-image: url('../../assets/images/icon-trash.png');
}

.icon-delete {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-delete.png');
}

.icon-volume_02 {
  width: 0.36rem;
  min-width: 0.36rem;
  height: 0.36rem;
  background-image: url('../../assets/images/icon-volume_02.png');
  margin-right: 0.15rem;
}

.song-play-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 9rem;
  background: rgba(255,255,255,0.9);
  position: absolute;
  bottom: 0;
  z-index: 2;
}

.control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.01rem;
  min-height: 1.01rem;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}

.control .collection-clear-box {
  display: flex;
}


.control .operation-btn {
  display: flex;
  align-items: center;
}

.control .operation-btn span {
  font-size: 0.3rem;
}

.control .operation-btn i {
  margin: 0 0.15rem;
}

.control .list-clear {
  margin: 0 0.15rem 0 0.4rem;
  padding-left: 0.15rem;
  border-left: 0.01rem solid #ccc;
}

.song-list {
  height: 100%;
  overflow-y: scroll;
}

.song-list li {
  display: flex;
  align-items: center;
  height: 0.9rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #ccc;
  margin-left: 0.2rem;
}

.song-list li a {
  display: block;
  width: 100%;
  height: 100%;
  margin-right: 0.2rem;
  line-height: 0.9rem;
  text-align: left;
  font-size: 0.3rem;
  overflow: hidden;
}

.song-list li a p {
  width: 100%;
}

.song-list li a p.active-song {
  color: #cc3333;
}

.song-list li a p.active-song span {
  color: inherit;
}

.song-list li a p span {
  font-size: 0.24rem;
  color: #666;
}

.song-list li .song-delete {
  width: 0.96rem;
  min-width: 0.96rem;
  height: 100%;
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: transform 0.3s
}

.fade-enter, .fade-leave-active {
  transform: translateY(100%);
}
</style>
