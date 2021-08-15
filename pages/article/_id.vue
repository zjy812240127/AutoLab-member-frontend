<template>
  <div id="aCoursesList"
       class="bg-fa of">
    <section class="container">
      <section class="path-wrap txtOf hLh30">

      </section>
      <h1>文件标题</h1>
      <h1>{{this.file.title}}</h1>

      <h1>文件简介</h1>
      <p>{{this.file.description}}</p>

      <div>
        <!-- <el-link :href="this.file.fileUrl"
                 target="_blank">下载</el-link> -->
        <el-link type="primary"
                 :href="this.file.fileUrl"
                 target="_blank">下载</el-link>
        <!-- <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link> -->
      </div>

    </section>

  </div>

</template>

<script>
import file from "@/api/file"
import order from "@/api/order"
export default {

  asyncData ({ params, error }) {
    return file.getById(params.id).then(response => {
      console.log(response);
      return {
        file: response.data.data.file,
      }
    })
  },

  data () {
    return {
      file: {},
      chapterList: [],
      flag: false,
    }
  },
  created () {
    this.initFileInfo()

  },
  methods: {



    initFileInfo () {

      file.getById(this.$route.params)
        .then(response => {
          this.file = response.data.data.file,
            console.log(this.file.title)
          // this.chapterList = response.data.data.chapter,
          // this.flag = response.data.data.flag
        })
    },
    createOrder () {
      order.createOrder(this.fileId).then(response => {
        if (response.data.success) {
          this.$router.push({ path: '/orders/' + response.data.data.orderId })
        }
      })
    }
  }
};

</script>

<style>
.my-label {
  background: #e1f3d8;
}

.my-content {
  background: #fde2e2;
}

font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
</style>