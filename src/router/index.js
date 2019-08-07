import Vue from 'vue'
import Router from 'vue-router'

import './before'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/login',
      component:resolve => require(['@/views/entry/login'],resolve)
    },
    {
      path: '/',
      redirect:'/home',
      component:  resolve => require(['@/layout/index'], resolve),
      children:[
        {
          path: '/home',
          component:  resolve => require(['@/views/home'], resolve),
        },
        {
          path: '/one',
          component:  resolve => require(['@/views/about'], resolve),
        },
        {
          path: '/tow',
          component:  resolve => require(['@/views/about'], resolve),
        }
      ]
    },
    // {
    //   path: '/about',
    //   component:  resolve => require(['@/views/about'], resolve),
    // }

  ]
})
export default router
