import { IRootState } from '@/store/type'
import { Module } from 'vuex'
import { ISystmeState } from './types'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystmeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRolerCount(state, Count: number) {
      state.roleCount = Count
    }
  },
  actions: {
    // 获取用户
    async getPageListAction({ commit }, payload: any) {
      // 1 对页面发送网络请求
      const pageNmae = payload.pageName
      const pageUrl = `/${pageNmae}/list`
      // 2对页面发送请求
      const pageResule = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResule.data
      const newPageNmae = pageNmae.slice(0, 1).toUpperCase() + pageNmae.slice(1)
      commit(`change${newPageNmae}List`, list)
      commit(`change${newPageNmae}Count`, totalCount)
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  }
}
export default systemModule
