/*
 * @Author: your name
 * @Date: 2020-04-03 15:07:20
 * @LastEditTime: 2020-04-07 14:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \custom_html\src\utils\localStore.js
 */

export function getLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key) || null)
}

export function setLocalStorage(key, data) {
    return window.localStorage.setItem(key, JSON.stringify(data))
}

export function removeLocalStorage(key) {
    return window.localStorage.removeItem(key)
}

export function getSessionStorage(key){
    return window.sessionStorage.getItem(key);
}
export function setSessionStorage(key,data){
    return window.sessionStorage.setItem(key, data);
}

export function removeSessionStorage(key){
    return window.sessionStorage.removeItem(key);
}
