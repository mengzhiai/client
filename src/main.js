/*
 * @Author: your name
 * @Date: 2019-11-22 09:16:52
 * @LastEditTime: 2020-04-07 15:10:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \client-system\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {Loading} from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/iconfont/iconfont.css'
import './style/common.css';
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Loading);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
