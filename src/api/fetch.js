import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      if (config.headers['Content-Type'] !== 'multipart/form-data') {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
    }
    return config
  },
  err => Promise.reject(err)
)

// http response 拦截器
axios.interceptors.response.use(
  res => {
    if (res.data.code !== '0') {
      Message.error(res.data.msg || '服务器未知错误')
    } else {
      return res.data
    }
  },
  error => Promise.reject(error.response.data)
)

export default axios
