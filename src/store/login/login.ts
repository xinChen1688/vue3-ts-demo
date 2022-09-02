import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import router from '@/router'

import { mapmenusToRoutes } from '@/utils/map-menus'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import LocalCache from '@/utils/cache'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: {}
    }
  },
  getters: {},
  mutations: {
    // 配置token
    changeToken(state, token: string) {
      state.token = token
    },
    // 用户信息
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    // 用户信息菜单列表
    changeUserMenus(state, userMenu: any) {
      state.userMenu = userMenu
      const routes = mapmenusToRoutes(userMenu)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    // 用户登陆时
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1 获取token
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)
      // 2 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 3 请求用户菜单
      const userMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      // 4 跳页面
      router.push('/main')
    },
    //  防止用户刷新时,vuex值为空初始化
    loadLoadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const userMenus = LocalCache.getCache('userMenus')
      // token && userInfo && userMenus 有值的时候
      if (token && userInfo && userMenus) {
        commit('changeToken', token)
        commit('changeUserInfo', userInfo)
        commit('changeUserMenus', userMenus)
      } else {
        router.push('/login')
      }
    }
  }
}

export default loginModule
