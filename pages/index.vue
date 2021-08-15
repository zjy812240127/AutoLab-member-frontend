<template>
  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">

        <div v-for="(items,index) in banner"
             v-bind:key="index"
             class="swiper-slide"
             style="background: #040B1B;">
          <a target="_blank"
             href="/">
            <img :src="items.imageUrl"
                 :alt="items.title"
                 style="width: 50%; height: 100%; object-fit: cover">
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white"
           slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white"
           slot="button-next"></div>
    </div>
    <!-- 幻灯片 结束 -->
    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">往期活动</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of"
                  id="bna">
                <li v-for="(items,index) in activity"
                    v-bind:key="index">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img :src="items.photoUrl"
                           class="img-responsive"
                           alt="听力口语"
                           style="width: 100%; height: 100%; object-fit: cover">
                      <div class="cc-mask">
                        <a :href="'/activity/'+items.id"
                           title="开始学习"
                           class="comm-btn c-btn-1">了解详情</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :href="'/activity/'+items.id"
                         title="听力口语"
                         class="course-title fsize18 c-333">{{items.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">9634人浏览</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#"
                 title="全部课程"
                 class="comm-btn c-btn-2">全部活动</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">主要成员</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="(items,index) in members"
                    v-bind:key="index">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/'+items.id"
                         title="姚晨">
                        <img alt="姚晨"
                             :src="items.avatar"
                             style="width: 100%; height: 100%; object-fit: cover">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/teacher/'+items.id"
                         title="姚晨"
                         class="fsize18 c-666">{{items.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{items.career}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">{{items.intro}}</p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#"
                 title="全部讲师"
                 class="comm-btn c-btn-2">全部成员</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>
<script>
import banner from '@/api/banner'
import teacher from '@/api/teacher'
import activity from '@/api/activity'
export default {
  data () {
    return {
      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev'//前一页dom节点
        },
        //自动轮播
        autoplay: {
          delay: 2500,//时间 毫秒
          disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 

        },
        loop: true,//循环 最后面一个往后面滑动会滑到第一个

      },
      banner: [],
      members: [],  // 主要成员
      activity: [],  // 近期活动
    }
  },

  //加载完渲染时
  created () {
    //获取课程列表
    this.initBanner()
    //获取分类
    // this.initSubject()
  },


  methods: {
    //查询banner列表
    initBanner () {
      banner.getBannerList().then(response => {
        this.banner = response.data.data.list
        console.log(this.banner)
        // alert(this.data.total)
      })

      teacher.getOlds().then(response => {
        this.members = response.data.data.list
      })

      activity.getActivityList().then(response => {
        this.activity = response.data.data.list
      })


    },

    findByTitle () {
      // alert(this.data.title)
      file.getByTitle(1, 8, this.file).then(response => {
        this.data = response.data.data
        // alert(this.data.total)
      })

    },


    //分页查询
    gotoPage (page) {
      this.page = page
      file.getPageList(page, 8).then(response => {
        this.data = response.data.data
      })
    }
  }



}
</script>

<style type="text/css">
li {
  float: left;
  color: #ff0000;
  font-size: 15px;
}
ul li {
  dispaly: block; /* 将ul的行内元素转换为块元素 */
  float: left; /* 增加了左浮动属性*/
}

.li {
  display: inline;
  float: left;
  margin: 5px 5px 18px 40px;
}

ul#menu li {
  display: inline;
}
</style>