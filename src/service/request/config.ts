export let BASE_URL = 'http://152.136.185.210:7878/api/hy66'
export const TIME_OUT = 5000
if (process.env.NODE_ENV === 'development') {
  BASE_URL =
    ' https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '生产'
} else {
  BASE_URL = '测试'
}
