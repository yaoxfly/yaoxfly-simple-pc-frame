/** @description ajax 配置文件
 * @author yx
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Request from './index' // 引入请求库
import { Loading } from 'element-ui'
import cache from '@/utils/cache'
import router from '@/router/index'
import config from '@/config'
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
    baseURL: config.server, // 后台api的域名、ip等
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
      // 可自由添加不需要JSONParse的数据的逻辑方法,true就是需要false就是不需要的
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
    value: -1, // 与后台规定的表示登录失败的code值,值相等时触发下面的
    // 接口异常(接口500,403等报错时执行）
    tipShow: (err, response) => {
      setTimeout(() => {
        $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)

      // 后端使用http状态码返回时401时，登录失败的处理方式
      if (response.status === 401) {
        router.push({
          path: '/login'
        })
      }
    },

    // 登录失败时执行--与后台规定的表示登录失败的code值相等时触发的方法
    notLogin: err => {
      setTimeout(() => {
        $this.$Message({
          message: err,
          type: 'error'
        })
      }, 200)
    },

    // 请求状态码200, 但业务上不成功时执行,即code!==0
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
