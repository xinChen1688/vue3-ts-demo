import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    // 用户登陆时
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      console.log('执行了accountLoginAction', loginResult)
    }
    // 手机登陆时 verification code
    // phoneLoginAction({ commit }, payload: IAccount) {
    //   console.log('执行了phoneLoginAction', payload)
    // }
  }
}

export default loginModule
