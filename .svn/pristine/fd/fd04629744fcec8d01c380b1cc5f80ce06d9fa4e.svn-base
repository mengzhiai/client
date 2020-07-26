/*
 * @Author: your name
 * @Date: 2020-04-03 16:33:52
 * @LastEditTime: 2020-04-07 11:41:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \custom_html\src\utils\http.js
 */
/****   http.js   ****/
// 导入封装好的axios实例
import request from './request';

const http = {
  //get请求
  get(url, params) {
    const config = {
      methods: 'get',
      url: url
    }
    if (params) {
      config.params = params;
      return request(config)
    }
  },
  //post请求
  /* 
  */
  post(url, data, type = 1) {
    if (type == 1) {
      const config = {
        method: 'post',
        url: url,
        data
      }
      if (data) {
        config.data = data;
        return request(config)
      }
    }
    if (type == 2) {
      const config = {
        method: 'post',
        url: url,
        params: data
      }
      if (data) {
        config.data = data;
        return request(config)
      }
    }
  },
  put(url, params) {
    const config = {
      methods: 'put',
      url: url
    }
    if (params) {
      config.params = params
      return request(config)
    }
  },
  delete(url, params) {
    const config = {
      methods: 'delete',
      url: url
    }
    if (params) {
      config.params = params
      return request(config)
    }
  }
}
//导出
export default http

