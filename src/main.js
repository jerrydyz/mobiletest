// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入axios 
import axios from 'axios'
Vue.prototype.$axios = axios
//并配置全局api url
axios.defaults.baseURL = 'https://result.eolinker.com/9aiYBqY53d6bcbec92d79dc54f08156105ec982c6b8a0d0?uri=aaaaa'

//手机端rem自适应方法
function setRem (){
  //得到手机屏幕的宽度
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  console.log(htmlWidth);
  //得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0];
  //设置根元素字体大小
  htmlDom.style.fontSize= htmlWidth/750*100 + 'px';
}
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
