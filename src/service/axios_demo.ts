import axios from 'axios'

// axios实列对象
// axios.get('http://152.136.185.210:7878/api/hy66')
// new Promise<string>((res) => {
//   res(123)
// }).then((res) => {
//   console.log(res)
// })
import { BASE_URL } from './request/config'
console.log(BASE_URL)
console.log(process.env.NODE_ENV)
console.log(process.env)
axios.get('http://152.136.185.210:7878/api/hy66/home/multdata').then((res) => {
  console.log(res.data)
})
// 请求
axios.interceptors.request.use(
  (config) => {
    console.log('请求中~~')
    return config
  },
  (err) => {
    console.log('请求失败~~', err)
    return err
  }
)
// 响应
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功~~')
    return res
  },
  (err) => {
    console.log('响应失败~~', err)
    return err
  }
)
