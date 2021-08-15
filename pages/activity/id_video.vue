<template>
  <div id="aCoursesList"
       class="bg-fa of">
    <!-- 讲师介绍 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">活动介绍</span>
        </h2>
      </header>
      <div class="t-infor-wrap">
        <!-- 讲师基本信息 开始 -->
        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img :src="activity.photoUrl"
                   :alt="activity.title">
            </section>
            <h3 class="hLh30">
              <span class="fsize24 c-333">{{ activity.title }}
                &nbsp;
                <!-- {{ activity.level===1?'高级讲师':'首席讲师' }} -->
              </span>
            </h3>
            <section class="mt10">
              <span class="t-tag-bg">{{ activity.description }}</span>
            </section>
            <!-- <section class="t-infor-txt">
              <p class="mt20">{{ teacher.career }}</p>
            </section> -->
            <div class="clear" />
          </div>
        </section>
        <!-- /讲师基本信息 结束 -->
        <div class="clear" />
      </div>
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">活动视频</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- 无数据提示 开始-->
          <section class="no-data-wrap"
                   v-if="activity.videoUrl==''">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理
              中...</span>
          </section>
        </div>
      </section>
    </section>
    <!-- /讲师介绍 结束 -->

    <section>
      <div v-video-player:myVideoPlayer="playerOptions"
           :playsinline="playsinline"
           class="video-player-box vjs-big-play-centered"
           @play="onPlayerPlay($event)"
           @pause="onPlayerPause($event)"
           @ended="onPlayerEnded($event)"
           @loadeddata="onPlayerLoadeddata($event)"
           @waiting="onPlayerWaiting($event)"
           @playing="onPlayerPlaying($event)"
           @timeupdate="onPlayerTimeupdate($event)"
           @canplay="onPlayerCanplay($event)"
           @canplaythrough="onPlayerCanplaythrough($event)"
           @ready="playerReadied"
           @statechanged="playerStateChanged($event)" />
    </section>

  </div>

</template>
<script>
import activity from "@/api/activity"
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css';

import { videoPlayer } from 'vue-video-player'


export default {


  name: 'videoComponents',
  asyncData ({ params, error }) {
    return activity.getById(params.id).then(response => {
      console.log(response);
      return {
        activity: response.data.data.activity,
      }
    })
  },





  data () {
    return {
      playsinline: true,
      playerOptions: {
        muted: true,
        controls: true,
        language: 'lang',
        playbackRates: [0.7, 1.0, 1.5, 2.0],  //播放速率
        sources: [
          {
            type: 'application/x-mpegURL',
            src: 'https://outin-a3706095dee511eba0a600163e1c60dc.oss-cn-shanghai.aliyuncs.com/sv/4a452683-17b3438c702/4a452683-17b3438c702.mp4?Expires=1628753745&OSSAccessKeyId=LTAI4FfD63zoqnm6ckiBFfXZ&Signature=5%2FTOUlDpTmU9PXEqCmgYfiyhwUg%3D'  //视频流地址
          }
        ],
        hls: true,  //启用hls？
        fluid: true,  //设置播放器为流体  宽度为外层盒子大小  ps：想设置width：100%找不到方法？这个就对了
        poster: "/assets/img/500.jpg"
      }
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log(playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // console.log('example 01: the player is readied', player)
    }
  }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.new-index {
  section {
    margin: 0;
    padding: 0;
  }
  // banner图
  .banner {
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;

    overflow-x: hidden;
    .banner-item {
      width: 100%;
      height: 100%;
      line-height: 0;
      font-size: 0;
      overflow: hidden;

      .banner-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: 100%;
      }

      video {
        width: 100%;
      }
    }
  }
}

.el-carousel {
  width: 100%;
  height: 100%;
}

.el-carousel__container {
  width: 100%;
  height: 100%;
}

.el-carousel__item {
  width: 100%;
  height: 100%;
  // border-radius: 10px;
  video {
    width: 100%;
    height: 100%;
    position: fixed;
    display: inline-block;
    vertical-align: baseline;
    object-fit: fill; //消除留白
  }
  .play-btn {
    font-size: 120px;
    color: #808080;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

