import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import login from '@/pages/login'
import commonHeader from '@/common/commonHeader'
import commonFooter from '@/common/commonFooter'




export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      components: {
          comheader: commonHeader,
          default: login,
          comfooter: commonFooter,
      }
    }
  ]
})
