import type { AxiosRequestConfig } from 'axios'

export interface HYRequestInterceptors {
  // 请求配置
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any

  // 响应配置
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (err: any) => any
}
// 继承 AxiosRequestConfig
export interface HYRequsetConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
}
