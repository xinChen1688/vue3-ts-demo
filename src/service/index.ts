import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求
    requestInterceptor: (config) => {
      // 携带token
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('请求中~')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败~')
      return err
    },
    // 响应
    responseInterceptor: (res) => {
      console.log('响应成功~')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('数据库响应失败~')
      return err
    }
  }
})
export default hyRequest
