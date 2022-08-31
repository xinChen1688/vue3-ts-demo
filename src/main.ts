import { createApp } from 'vue'
import { globalRegister } from './global'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'

// import './service/axios_demo'
// import hyRequest from './service'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')
// console.log(process.env.VUE_APP_BASE_URL)

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'get',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应')
//       return res
//     }
//   }
// })
// interface DataType {
//   data: any
//   retrunCode: string
//   success: boolean
// }

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
