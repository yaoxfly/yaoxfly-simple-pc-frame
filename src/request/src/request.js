/** @description 支持pc、h5、小程序的请求类库
 * @author yx
 */
class Request {
  static className = 'EveRequest';
  loadingTimer = ''; // 请求loading的定时器
  request = ''; // 请求
  qs = ''; // 转换的类
  loading = true; // 是否开启动画
  type = ''; // 请求库类型
  /* eslint-disable */
  constructor(options = {}) {
    const {
      // 请求类的默认配置
      requestConfig: {
        request, // 请求
        qs, // qs
        headers, // 请求头
        timeout = 30000, // 超时
        baseURL, // 基本地址
        type, // 请求类型
        withCredentials, // 是否携带session
        interceptionBefore, // 拦截前回调
        interceptionAfter, // 拦截后回调
        jsonParse  // 是否JSONParse返回的数据
      } = {},
      // 关于接口loading的配置
      loading: {
        isLoading = true, // 是否动画加载
        limitTime = 200, // 定时器限制时间
        loadingShow, // 关闭loading
        loadingHide // 显示loading
      } = {},
      // 异常情况
      resError: {
        success, // 与后台规定的是否成功的键值名
        key, // 与后台规定的状态码
        value, // 与后台规定的表示登录失败的code值
        msg, // 与后台规定的消息
        tipShow, // 接口异常默认提示的方法
        notSuccessful, // 各种操作不成功的提示方法
        notLogin // 登录失败提示方法
      } = {},
      // 权限控制
      accessControl: {
        routeValidate // 路由登录权限控制 (可以让路由不需要登录,也可跳转) false 不需要验证
      } = {}
    } = options || {}

    // 需要共用
    this.request = request
    this.qs = qs
    this.type = type

    this.requestConfig({
      headers: headers,
      timeout: timeout,
      baseURL: baseURL,
      withCredentials: withCredentials
    })

    this.interceptorsRequest({
      isLoading: isLoading,
      limitTime: limitTime,
      loadingShow: loadingShow,
      interceptionBefore: interceptionBefore
    })

    this.interceptorsResponse({
      isLoading: isLoading,
      limitTime: limitTime,
      loadingHide: loadingHide,
      success: success,
      key: key,
      msg: msg,
      value: value,
      tipShow: tipShow,
      notSuccessful: notSuccessful,
      notLogin: notLogin,
      routeValidate: routeValidate,
      interceptionAfter: interceptionAfter,
      jsonParse: jsonParse
    })
  }

  // 请求配置
  requestConfig (config) {
    const { headers, timeout, baseURL, withCredentials } = config || {}
    const keyMap = {
      fly: () => {
        this.request.config.headers = headers // 定义公共headers
        this.request.config.timeout = timeout // 设置超时
        this.request.config.baseURL = baseURL // 设置请求基地址
        this.request.config.withCredentials = withCredentials // 跨域处理
      },
      axios: () => {
        this.request.defaults.baseURL = baseURL
        this.request.defaults.headers = headers
        this.request.defaults.timeout = timeout // 设置超时
        this.request.defaults.withCredentials = withCredentials // 跨域处理
      }
    }
    keyMap[this.type.toLowerCase()].call(this)
  }

  // 添加请求拦截器 发送前
  interceptorsRequest (config) {
    const { isLoading, limitTime, loadingShow, interceptionBefore } =
      config || {}
    this.request.interceptors.request.use(res => {
      interceptionBefore(res)
      this.loadingTimer = setTimeout(() => {
        isLoading && this.loading && loadingShow()
      }, limitTime || 0)
      return res
    })
  }

  // 添加请求拦截器 发送后
  interceptorsResponse (config) {
    const {
      isLoading,
      limitTime,
      loadingHide,
      success,
      key,
      msg,
      value,
      tipShow,
      notSuccessful,
      notLogin,
      routeValidate,
      interceptionAfter,
      jsonParse
    } = config || {}
    // 添加响应拦截器，响应拦截器会在then/catch处理之前执行(获取数据后)
    this.request.interceptors.response.use(
      response => {
        interceptionAfter(response)
        return new Promise(resolve => {
          clearTimeout(this.loadingTimer)
          if (isLoading && this.loading) {
            setTimeout(() => {
              loadingHide()
            }, limitTime || 0)
          }
          response =
            typeof response === 'string' ? JSON.parse(response) : response
          let data
          if (response.data !== '') {
            data = typeof response.data === 'string' && jsonParse && response.headers['content-type'] !== 'text/html;charset=UTF-8' && response.headers['content-type'] !== 'image/jpeg' && response.headers['content-type'] !== 'application/octet-stream'
              ? JSON.parse(response.data)
              : response.data
          } else {
            data = ''
          }
          if (data[key] === value && (routeValidate ? routeValidate() : true)) {
            notLogin(data[msg])
            return
          }
          !data[success] && notSuccessful(data[key], data[msg])
          return resolve(data)
        })
      },
      err => {
        return new Promise(() => {
          if (err && err.response) {
            switch (err.response.status) {
              case 400:
                err.message = '请求错误(400)'
                break
              case 401:
                err.message = '未授权，请重新登录(401)'
                break
              case 403:
                err.message = '拒绝访问(403)'
                break
              case 404:
                err.message = '请求出错(404)'
                break
              case 408:
                err.message = '请求超时(408)'
                break
              case 500:
                err.message = err.response.data.msg ? err.response.data.msg : '服务器错误(500)'
                break
              case 501:
                err.message = '服务未实现(501)'
                break
              case 502:
                err.message = '网络错误(502)'
                break
              case 503:
                err.message = '服务不可用(503)'
                break
              case 504:
                err.message = '网络超时(504)'
                break
              case 505:
                err.message = 'HTTP版本不受支持(505)'
                break
              default:
                err.message = `服务器升级中,请稍后重试。(${err.response.status})!`
            }
          } else {
            err.message = '网络超时,请稍后重试!'
          }
          clearTimeout(this.loadingTimer)
          loadingHide() // 隐藏loading
          tipShow(err.message, err.response) // 显示异常信息
          interceptionAfter(err.response)
          resolve(err)
        })

      }
    )
  }

  /** 请求类可用post、get、delete、put等方法，次方法集合了deleteData、postForm、getFile方法
   * @param  {String}  url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param  {String}  type 是get 还是post 请求
   * @param  {Object}  config  配置项 里包括   loading 是否开启loading动画 qs 是否开启qs转换 headers 添加请求头--可用来传递参数
   * @return {Object} 返回请求结果
   */
  requests = (url, params = '', type = 'post', config = {}) => {
    //passParamWay(传参方式):data、param
    const { loading = true, qs = true, headers = {}, responseType = '', passParamWay = 'params' } = config
    this.loading = loading
    return new Promise((resolve, reject) => {
      if (this.type === 'axios') {
        const param = {
          method: type,
          url: url,
          responseType: responseType,
          paramsSerializer: params => {
            return this.qs && qs ? this.qs.stringify(params) : params
          },
          headers: headers
        }
        const keyMap = {
          'params': () => {
            Object.assign(arg, {
              params: params,
            })
          },
          //用data方式传参的请求
          'data': () => {
            Object.assign(arg, {
              data: params,
            })
          },
          //用form传参方式的发起请求 postForm集合版
          'form': () => {
            Object.assign(arg, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            })
          }
        }
        keyMap[passParamWay]()
        this.request
          .request(param)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
        return
      }
      this.request
        .request(url, this.qs && qs ? this.qs.stringify(params) : params, {
          method: type,
          headers: headers,
          responseType: responseType,
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };

  /**
   * 请求类 get方法 多用来获取数据 get 方法默认关闭loading
   * @param {String} url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param {Object} config  配置项,包括 loading:是否开启loading动画;qs:是否开启qs转换
   * @return {Object} 返回请求结果
   */
  get = (url, params = '', config = {}) => {
    //responseType设置为blob可以下载文件
    const { loading = false, qs = true, responseType = '' } = config
    this.loading = loading
    return new Promise((resolve, reject) => {
      let arg = ''
      if (this.type === 'axios') {
        arg = {
          params: params,
          responseType: responseType,
          paramsSerializer: params => {
            return this.qs && qs ? this.qs.stringify(params) : params
          }
        }
      } else {
        arg = this.qs && qs ? this.qs.stringify(params) : params
      }

      this.request
        .get(url, arg)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };

  /**
   * 请求类 post 方法 多用来新增数据
   * @param {String} url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param {Object} config 配置项,包括 loading:是否开启loading动画;qs:是否开启qs转换
   * @return {Object} 返回请求结果
   */
  post = (url, params = '', config = {}) => {
    const { loading = true, qs = true } = config;
    this.loading = loading
    return new Promise((resolve, reject) => {
      this.request
        .post(url, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };


  /**
   * 请求类 put 方法 多用来修改数据（需要传递所有字段，相当于全部更新）
   * @param {String} url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param {Object} config 配置项,包括 loading:是否开启loading动画;qs:是否开启qs转换
   * @return {Object} 返回请求结果
   */
  put = (url, params = '', config = {}) => {
    const { loading = true, qs = false } = config
    this.loading = loading
    return new Promise((resolve, reject) => {
      this.request
        .put(url, this.qs && qs ? this.qs.stringify(params) : params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };

  /**
   * 请求类 patch 方法 多用来修改数据，是在put的基础上新增改进的，适用于局部更新，比如我只想修改用户名，只传用户名的字段就ok了，而不需要像put一样把所有字段传过去
   * @param {String} url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param {Object} config 配置项,包括 loading:是否开启loading动画;qs:是否开启qs转换
   * @return {Object} 返回请求结果
   */
  patch = (url, params = '', config = {}) => {
    const { loading = true, qs = true } = config
    this.loading = loading
    return new Promise((resolve, reject) => {
      this.request
        .patch(url, this.qs && qs ? this.qs.stringify(params) : params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };

  /**
   * 请求类 delete 方法 多用来删除数据
   * @param {String} url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param {Object} config 配置项,包括 loading:是否开启loading动画;qs:是否开启qs转换
   * @return {Object} 返回请求结果
   */
  delete = (url, params = '', config = {}) => {
    //passParamWay(传参方式):data、param
    const { loading = true, qs = true, passParamWay = 'params' } = config
    this.loading = loading
    return new Promise((resolve, reject) => {
      let arg = ''
      if (this.type === 'axios') {
        arg = {
          paramsSerializer: params => {
            return this.qs && qs ? this.qs.stringify(params) : params
          }
        }
        const keyMap = {
          'params': () => {
            Object.assign(arg, {
              params: params,
            })
          },
          //用data方式传参的请求，多用在批量删除时,相当于deleteData
          'data': () => {
            Object.assign(arg, {
              data: params,
            })
          }
        }
        keyMap[passParamWay]()
      } else {
        arg = this.qs && qs ? this.qs.stringify(params) : params
      }
      this.request
        .delete(url, arg)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };


  /** 文件上传，且可以带上headers参数 --只能是post请求,其他请求接收不到文件类型的数据
   * @param  {String}  url api接口地址
   * @param  {Object/String}  params 传到后台的参数
   * @param  {Object}  config 配置项 loading:是否开启loading动画 headers:添加请求头--可用来传递参数 timeout:超时时间，为0时则无超时限制
   * @return {Object}  返回请求结果
   */
  submitFormData = (url, params = '', config = {}) => {
    const { loading = true, headers = {}, timeout = 0 } = config
    this.loading = loading
    return new Promise((resolve, reject) => {
      if (this.type === 'axios') {
        this.request
          .request({
            method: 'post',
            url: url,
            data: params,
            headers: headers,
            timeout: timeout
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
        return
      }

      // fly请求必须加上传输文件headers头才可以提交请求
      this.request
        .request(url, params, {
          method: 'post',
          headers: Object.assign(headers, {
            'Content-Type': 'multipart/form-data'
          }),
          timeout: timeout
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };
}

export default Request
