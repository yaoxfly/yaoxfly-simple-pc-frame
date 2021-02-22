/*
 * @Description:ajax 配置文件
 * @Date: 2020-12-1
 */
/*eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import YxRequest from './index'
import { Loading } from 'element-ui'
import cache from '@/utils/cache.js'
// import router from '@/router/index.js'
const $this = new Vue()
var loading = ''
Vue.use(YxRequest)
export default new YxRequest({
  // 请求配置
  requestConfig: {
    request: axios, // 请求名 flyio/axios
    type: 'axios', // 请求类型
    qs: qs,
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded"
      'Content-Type': 'application/json;charset=utf-8'
    },
    timeout: 30000,
    baseURL: process.env.VUE_APP_SERVER,
    withCredentials: false,
    // 请求拦截前 config是ajax
    interceptionBefore: config => {
      const token = cache.getCache('token')
      if (token) {
        config.headers.Authorization = 'bearer' + ' ' + token
      }
    },
    // 请求拦截后
    interceptionAfter: response => { }
  },

  loading: {
    // 以下消息提示要200秒的延时 不然会被提前关闭 uni-app的坑 关闭一个所有消息都关闭
    isLoading: true, // 是否开启动画
    limitTime: 200, // 接口请求在xxxms内完成则不展示loading 0无限制
    // 请求拦截前，写loading显示逻辑
    loadingShow: () => {
      setTimeout(() => {
        loading = Loading.service({
          lock: true,
          text: '',
          background: 'rgba(255, 255, 255, 0.3)'
        })
      }, 200)
    },
    // 请求拦截后，写loading隐藏逻辑
    loadingHide: () => {
      setTimeout(() => {
        loading && loading.close()
      }, 200)
    }
  },

  resError: {
    success: 'success', // 与后台规定的是否成功键值名
    key: 'code', // 与后台规定的状态码的键值名
    msg: 'msg', // 与后台规定的消息键值名 key值必须是msg,右边可改。
    value: -1, // 与后台规定的表示登录失败的code值
    // 接口异常默认提示的方法
    tipShow: (err, status) => {
      setTimeout(() => {
        $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)
    },

    // 登录失败提示
    notLogin: err => {
      setTimeout(() => {
        $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)

    },

    // 不成功的提示
    notSuccessful: (code, err) => {
      // 授权问题
      // if (code === 'A0312') {
      setTimeout(() => {
        err && $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)
      // }

      // if (code === '401') {
      //   setTimeout(() => {
      //     cache.clearCache()
      //     router.push('/login')
      //   }, 1000)
      // }
    }
  }
})