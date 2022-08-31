import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequsetConfig } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEAFULT_Loaing = true
class HYRequest {
  // 实列标识 AxiosInstance库的类型规则  axios实列标识
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: HYRequsetConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading || false
    // 继承
    this.interceptors = config.interceptors

    // 创建实列内请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 创建实列内响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局请求器
    this.instance.interceptors.request.use(
      (config) => {
        // 请求时的loading
        if (this.showLoading) {
          console.log('loading')
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载.....',
            background: 'rgba(0,0,0,.5)'
          })
        }
        console.log('请求所有实列成功~')
        return config
      },
      (err) => {
        console.log('请求所有实列失败~')
        return err
      }
    )
    // 全局响应器
    this.instance.interceptors.response.use(
      (res) => {
        // loading 移除
        this.loading?.close()
        console.log('响应所有实列成功~')
        return res
      },
      (err) => {
        // loading 移除
        this.loading?.close()
        console.log('响应所有实列失败~')
        return err
      }
    )
  }

  request<T>(config: HYRequsetConfig): Promise<T> {
    return new Promise((resole, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // loading判断
      if (!config.showLoading) {
        this.showLoading = DEAFULT_Loaing
      }

      // 单个请求处理
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          // loading默认开启
          this.showLoading = DEAFULT_Loaing

          // 成功回调
          resole(res)
        },
        (err) => {
          reject(err)
        }
      )
    })
  }

  get<T>(config: HYRequsetConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }

  post<T>(config: HYRequsetConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }

  delete<T>(config: HYRequsetConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }

  patch<T>(config: HYRequsetConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' })
  }
}

export default HYRequest
