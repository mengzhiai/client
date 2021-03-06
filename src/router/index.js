/*
 * @Author: your name
 * @Date: 2019-11-22 09:16:52
 * @LastEditTime: 2020-04-07 14:38:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \client-system\src\router\index.js
 */
import { Message } from 'element-ui';
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/page',
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: '/page',
        name: 'page',
        meta: {
          requireAuth: true
        },
        component: () => import('../views/home/page.vue')
      },
      {
        path: '/test',
        name: 'test',
        meta: {
          requireAuth: true
        },
        component: () => import('../views/home/test.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if(to.matched.some(res => res.meta.requireAuth)){
    if(sessionStorage.getItem("jtoken")){
      next();
    }else{
      next({
        path: '/'
      });
      Message.warning('登录已过期,请重新登录');
    }
  }else{
    next();
  }
})