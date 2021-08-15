<template>

  <div id="aCoursesList"
       class="bg-fa of">

    <section class="container">
      <div id="all">
        <div id="main"
             style="width: 1200px;height:0px;"></div>

        Welcome<br /><input id="text"
               type="text" />
        <button @click="send()">发送消息</button>
        <hr />
        <button @click="closeWebSocket()">关闭WebSocket连接</button>
        <hr />
        <div id="message"></div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'sign',
  data () {
    return {
      user: {
        mobile: '',
        password: ''
      },
      loginInfo: {},
      websocket: '',
    }
  },

  //加载完渲染时
  created () {
    // this.websocket = null;
    //获取课程列表
    // var websocket = null;
    this.init()
    //获取分类
    // this.initSubject()
    // this.setMessageInnerHTML("123")
  },

  methods: {

    init () {
      var websocket = null;
      //判断当前浏览器是否支持WebSocket
      if ('WebSocket' in window) {
        //改成你的地址
        this.websocket = new WebSocket("ws://127.0.0.1:8222/api/websocket/100");
      } else {
        alert('当前浏览器 Not support websocket')
      }

      //连接发生错误的回调方法
      this.websocket.onerror = function () {
        setMessageInnerHTML("WebSocket连接发生错误");
      };

      //连接成功建立的回调方法
      this.websocket.onopen = function () {
        setMessageInnerHTML("WebSocket连接成功");
      }
      var U01data, Uidata, Usdata
      //接收到消息的回调方法
      this.websocket.onmessage = function (event) {
        // setMessageInnerHTML("接受到消息");
        console.log(event);
        setMessageInnerHTML(event.data);
        // setechart()
      }

      //连接关闭的回调方法
      this.websocket.onclose = function () {
        setMessageInnerHTML("WebSocket连接关闭");
      }

      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function () {
        closeWebSocket();
      }

      function setMessageInnerHTML (innerHTML) {
        document.getElementById('message').innerHTML += innerHTML + '<br/>';
      }
    },




    //将消息显示在网页上
    setMessageInnerHTML (innerHTML) {
      document.getElementById('message').innerHTML += innerHTML + '<br/>';
    },

    //关闭WebSocket连接
    closeWebSocket () {
      this.websocket.close();
    },

    //发送消息
    send () {
      var message = document.getElementById('text').value;
      this.websocket.send('{"msg":"' + message + '"}');
    }

  }
}
</script>

<style type="text/css">
#all {
  width: 1000px;
  height: 450px;
  border: 1px solid green;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -225px 0 0 -400px;
}
</style>