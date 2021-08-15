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
              <a :href="'/player/'+activity.videoUrl"
                 target="_blank">
                <span>
                  <i class="free-icon vam mr10">立即观看</i>
                </span>
              </a>
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
  </div>

</template>
<script>
import activity from "@/api/activity"

export default {

  asyncData ({ params, error }) {
    return activity.getById(params.id).then(response => {
      console.log(response);
      return {
        activity: response.data.data.activity,
      }
    })
  },


}
</script>

