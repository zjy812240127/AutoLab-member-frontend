<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#"
             title="浙江工业大学">
            <img src="~/assets/img/zjut/ZJUT.png"
                 width="100%"
                 alt="浙江工业大学">
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/"
                         tag="li"
                         active-class="current"
                         exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course"
                         tag="li"
                         active-class="current">
              <a>团队概况</a>
            </router-link>
            <router-link to="/teacher"
                         tag="li"
                         active-class="current">
              <a>科学研究</a>
            </router-link>
            <router-link to="/article"
                         tag="li"
                         active-class="current">
              <a>重要成果</a>
            </router-link>
            <router-link to="/activity"
                         tag="li"
                         active-class="current">
              <a>主要活动</a>
            </router-link>
            <router-link to="/qa"
                         tag="li"
                         active-class="current">
              <a>问答</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!loginInfo.id"
                id="no-login">
              <a href="/login"
                 title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register"
                 title="注册">
                <span class="vam ml5">注册</span>
              </a>
              <!-- |
              <a href="/adminLogin"
                 title="管理员登录">
                <span class="vam ml5">管理员登录</span>
              </a> -->
              <!-- |
              <a href="/adminLogin"
                 title="管理网站资源">
                <span class="vam ml5">管理网站资源</span>
              </a> -->
              |
              <a href="http://localhost:9528"
                 title="管理网站资源">
                <span class="vam ml5">管理网站资源</span>
              </a>
            </li>
            <li v-if="loginInfo.id"
                id="is-login-one"
                class="mr10">
              <a id="headerMsgCountId"
                 href="#"
                 title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point"
                 style="display: none">&nbsp;</q>
            </li>
            <li v-if="loginInfo.id"
                id="is-login-two"
                class="h-r-user">
              <a href="/ucenter"
                 title>
                <img :src="loginInfo.avatar"
                     width="30"
                     height="30"
                     class="vam picImg"
                     alt>
                <span id="userName"
                      class="vam disIb">{{ loginInfo.nickname }}</span>
              </a>
              <a href="javascript:void(0);"
                 title="退出"
                 @click="logout()"
                 class="ml5">退
                出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <form action="#"
                  method="post">
              <label class="h-r-s-box">
                <input type="text"
                       placeholder="输入你想了解的内容"
                       name="queryCourse.courseName"
                       value>
                <button type="submit"
                        class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->
    <nuxt />
    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.ie.zjut.edu.cn/jsp/index.jsp"
                 title="浙江工业大学信息工程学院"
                 target="_blank">浙江工业大学信息工程学院</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#"
                   title="关于我们"
                   target="_blank">关于我们</a>|
                <a href="#"
                   title="联系我们"
                   target="_blank">联系我们</a>|
                <a href="#"
                   title="帮助中心"
                   target="_blank">帮助中心</a>|
                <a href="#"
                   title="资源下载"
                   target="_blank">资源下载</a>|
                <span>服务热线：010-56253825(北京) 0755-85293825(杭州)</span>
                <span>Email：info@zjut.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2018版权均归浙江工业大学所有 京ICP备17055252号</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png"
                     alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png"
                     alt>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";
import '~/assets/css/base.css'
import '~/assets/css/activity_tab.css'
import '~/assets/css/bottom_rec.css'
import '~/assets/css/nice_select.css'
import '~/assets/css/order.css'
import '~/assets/css/swiper-3.3.1.min.css'
import "~/assets/css/pages-weixinpay.css"
import cookie from 'js-cookie'
import userApi from '@/api/login'
export default {
  data () {
    return {
      token: '',
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: ''
      }
    }
  },
  created () {
    this.showInfo()
    // 从url中获取token

    // this.getToken()
  },
  methods: {
    showInfo () {
      //debugger
      var jsonStr = cookie.get("guli_ucenter");
      //alert(jsonStr)
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    },
    logout () {
      //debugger
      cookie.set('guli_ucenter', "", { domain: 'localhost' })
      cookie.set('guli_token', "", { domain: 'localhost' })
      //跳转页面
      window.location.href = "/"
    },
    // 获取url中的token值，并将其存到cookie，
    // getToken () {
    //   if (this.$route.query && this.$route.query.token) {
    //     this.token = this.$route.query.token
    //     // console.log("token=" + this.token)
    //   } else {
    //     console.log("token不存在")
    //     return
    //   }

    //   //把token存在cookie中、也可以放在localStorage中
    //   cookie.set('guli_token', this.token, { domain: 'localhost' })
    //   cookie.set('guli_ucenter', '', { domain: 'localhost' })
    //   console.log(this.token)
    //   // TODO

    //   // 登录成功根据token获取用户信息
    //   userApi.getLoginInfo().then(response => {
    //     this.loginInfo = response.data.data.items
    //     //将用户信息记录cookie
    //     cookie.set('guli_ucenter', this.loginInfo, { domain: 'localhost' })
    //   })
    // }

  }
}
</script>