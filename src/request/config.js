/** @description ajax 配置文件
 * @author yx
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Request from './index' // 引入请求库
import { Loading } from 'element-ui'
import cache from '@/utils/cache.js'
import router from '@/router/index.js'
const $this = new Vue()
var loading = ''
Vue.use(Request)
export default new Request({
  /* 请求配置 */
  requestConfig: {
    request: axios, // 请求名 fly/axios
    type: 'axios', // 请求类型
    qs: qs,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    timeout: 30000,
    baseURL: process.env.VUE_APP_SERVER, // 后台api的域名、ip等
    withCredentials: false,
    // 请求拦截前 config是ajax
    interceptionBefore: config => {
      // 在这里添加token
      const token = cache.getCache('token')
      if (token) {
        config.headers.Authorization = 'bearer' + ' ' + token
      }
    },
    // 请求拦截后
    interceptionAfter: response => { },
    // 是否JSONParse返回的数据
    jsonParse: response => {
      // 可自由添加不需要JSONParse的数据,true就是需要，false就是不需要的。
      return true
    }
  },

  /* loading配置 */
  loading: {
    // 以下消息提示要200秒的延时,否则消息框会被提前关闭。
    isLoading: false, // 是否开启全局动画
    limitTime: 200, // 接口请求在xxxms内完成则不展示loading 0无限制
    // loading显示
    loadingShow: () => {
      setTimeout(() => {
        loading = Loading.service({
          lock: true,
          text: '',
          background: 'rgba(255, 255, 255, 0.3)'
        })
      }, 200)
    },
    // loading隐藏
    loadingHide: () => {
      setTimeout(() => {
        loading && loading.close()
      }, 200)
    }
  },

  /* 请求成功、异常的配置 */
  resError: {
    success: 'success', // 与后台规定的是否成功键值名
    key: 'code', // 与后台规定的状态码的键值名
    msg: 'msg', // 与后台规定的消息键值名 key值必须是msg,右边可改。
    value: -1, // 与后台规定的表示登录失败的code值
    // 接口异常默认提示的方法/登录失败等操作也可在这里进行处理
    tipShow: (err, response) => {
      setTimeout(() => {
        $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)

      // 登录失败的处理,失败就跳到登录页
      if (response.status === 401) {
        router.push({
          path: '/login'
        })
      }
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
      setTimeout(() => {
        err && $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)
    }
  }
})
