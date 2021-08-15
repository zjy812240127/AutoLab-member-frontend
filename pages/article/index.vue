<template>
  <div id="aCoursesList"
       class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部文件</span>
        </h2>

        <aside class="h-r-search">
          <!-- <form action="#"
                method="post"> -->
          <label class="h-r-s-box">
            <input type="text"
                   placeholder="输入你想查询的文件"
                   v-model="file.title"
                   value>
            <button type="submit"
                    class="s-btn"
                    @click="findByTitle()">
              <em class="icon18">&nbsp;</em>
            </button>
          </label>
          <!-- </form> -->
        </aside>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <div class="clear" />
        </section>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap"
                   v-if="data.total==0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <!-- 数据列表 开始-->

          <article v-if="data.total >0"
                   class="comm-course-list">
            <ul id="bna"
                class="of">
              <li v-for="items in data.fileList"
                  :key="items.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <i class="el-icon-document">普通文件</i>
                    <!-- <img :src="items.cover"
                         class="img-responsive"
                         alt="普通文件"> -->
                    <div class="cc-mask">
                      <a :href="'/article/'+items.id"
                         title="查看详情"
                         class="commbtn 
                          c-btn-1">查看详情</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/article/'+items.id"
                       :title="items.title"
                       class="course-title fsize18 c-333">{{ items.title }}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span v-if=" items.fileUrl !== undefined && items.fileUrl.length >=1 "
                          class="fr jgTag bggreen">
                      <i class="c-fff fsize12 f-fA">可下载</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{ items.viewCount }}次浏览</i>
                      |
                      <i class="c-999 f-fA">{{ items.loadCount }}次下载</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear" />
          </article>
          <!-- /数据列表 结束-->

        </div> <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a :class="{undisable: !data.hasPrevious}"
               href="#"
               title="首页"
               @click.prevent="gotoPage(1)">首</a>
            <a :class="{undisable: !data.hasPrevious}"
               href="#"
               title="前一页"
               @click.prevent="gotoPage(data.current-1)">&lt;</a>
            <a v-for="page in data.pages"
               :key="page"
               :class="{current: data.current == page, undisable: data.current == page}"
               :title="'第'+page+'页'"
               href="#"
               @click.prevent="gotoPage(page)">{{ page }}</a>
            <a :class="{undisable: !data.hasNext}"
               href="#"
               title="后一页"
               @click.prevent="gotoPage(data.current+1)">&gt;</a>
            <a :class="{undisable: !data.hasNext}"
               href="#"
               title="末页"
               @click.prevent="gotoPage(data.pages)">末</a>
            <div class="clear" />
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template> 
<script>
import file from '@/api/file'
export default {
  data () {
    return {
      page: 1,
      data: {
      },
      file: {},
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      searchObj: {}, // 查询表单对象
      oneIndex: -1,
      twoIndex: -1,
      buyCountSort: "",
      gmtCreateSort: "",
      priceSort: ""
    }
  },
  //加载完渲染时
  created () {
    //获取课程列表
    this.initCourse()
    //获取分类
    // this.initSubject()
  },
  methods: {
    //查询课程列表
    initCourse () {
      file.getPageList(1, 8).then(response => {
        this.data = response.data.data
        // alert(this.data.total)
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
<style scoped>
.active {
  /* 点击的时候按钮会加一个背景色 */
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>