import { RouteRecordRaw } from 'vue-router'
export function mapmenusToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1先去加载默认所有的router
  const allroutes: RouteRecordRaw[] = []
  // webpack的函数 1路径  2是否递归  3匹配文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allroutes.push(route.default)
  })

  // 2根据菜单后期需要添加的routes
  const _recueeGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allroutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recueeGetRoute(menu.children)
      }
    }
  }

  _recueeGetRoute(userMenu)

  return routes
}
