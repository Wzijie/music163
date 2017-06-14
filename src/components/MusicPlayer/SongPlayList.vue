<template>
<transition name="fade">
  <div class="song-play-list" v-show='isSongPlayListShow'>
    <div class="control">
      <div class="play-mode operation-btn" @click='changePlayMode'>
        <i class="icon" :class='playModeIconClass'></i>
        <span>{{ playModeTipText }}</span>
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
        <div class="song-delete" @click='deleteSong(index)'>
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
      },
      playMode (state) {
        return state.MusicPlayer.playMode;
      }
    }),
    // 返回播放模式图标的class
    playModeIconClass () {
      return this.playModeSwitch('icon-loop-list_02', 'icon-loop-song_02', 'icon-random-play_02');
    },

    // 播放模式提示文字
    playModeTipText () {
      var songListLength = this.songList.length
      return this.playModeSwitch(`列表循环(${songListLength})`, '单曲循环', `随机播放(${songListLength})`);
    }
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
    },

    // 根据播放模式返回不同的内容
    // 3个参数分别是返回的内容
    playModeSwitch (listLoopReturn, songLoopReturn, randomPlayReturn) {
      switch (this.playMode) {
        case 'listLoop':
          return listLoopReturn;
        case 'oneSongLoop':
          return songLoopReturn;
        case 'randomPlay':
          return randomPlayReturn;
        default: break;
      }
    },

    // 改变播放模式
    changePlayMode () {
      this.$store.commit('MusicPlayer/changePlayMode');
    },

    deleteSong (songIndex) {
      this.$store.commit('MusicPlayer/deleteSong', {
        data: songIndex
      });
    }
  }
}
</script>

<style scoped>
.icon-loop-list_02 {
  width: 0.43rem;
  height: 0.3rem;
  background-image: url('../../assets/images/icon-loop-list_02.png');
}

.icon-loop-song_02 {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-loop-song_02.png');
}

.icon-random-play_02 {
  width: 0.48rem;
  height: 0.48rem;
  background-image: url('../../assets/images/icon-random-play_02.png');
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
