/*
 * @Author: your name
 * @Date: 2020-04-03 15:18:34
 * @LastEditTime: 2020-04-07 11:36:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \custom_html\src\api\login.js
 */
import request from '../utils/request';


import http from '../utils/http.js'
const moduleLogin = "/api/login";
const moduleClient = '/api/sysUser';
const moduleSysPage  = '/api/sysPage'

export default {
  login(data) {
    return http.post(`${moduleLogin}/login.do`,data,2)
  },
  getClient(data){
    return http.post(`${moduleClient}/getUserListByDeptId.do`,data)
  },
  getData(data){
    return http.get(`${moduleSysPage}/getListAllByRoleId.do`,data)
  }
}
