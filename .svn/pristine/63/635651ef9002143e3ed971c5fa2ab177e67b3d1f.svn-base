/*
 * @Author: your name
 * @Date: 2019-11-25 16:15:34
 * @LastEditTime: 2019-11-25 17:06:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \client-system\src\utils\rules.js
 */
import {Message} from 'element-ui'
//邮箱验证
const emialReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
//手机号
const phoneReg=/^1[23456789]\d{9}$/;
//邮编
const postcodeReg = /^[0-9]{6}$/;
//邮箱
export function verifyEmail(email){
  if(email !== ''){
    if(!emialReg.test(email)){
      Message({
        message: '邮箱格式不正确',
        type: 'warning'
      })
    }else{
    }
  }else{
    message.warning('邮箱不能为空');
  }
}

//邮编
export function verifyPostcode(postcode){
  if(postcode !== ''){
   if(!postcodeReg.test(postcode)){
    Message({
      message: '邮箱根式不正确',
      type: 'warning'
    })
   }
  }else{
    Message({
      message: '请输入邮编',
      type: 'warning'
    })
  }
}

/* export function verify(rule, value, callback) {
  if (value === '') {
    callback(new Error('负责人手机号不可为空'));
  } else {
    if (value !== '') { 
      var reg=/^1[3456789]\d{9}$/;
      if(!reg.test(value)){
        callback(new Error('请输入有效的手机号码'));
      }
    }
    callback();
  }
}; */