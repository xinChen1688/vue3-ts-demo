import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, ISroteType } from './type'
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 12
    }
  },
  mutations: {
    changeName(state) {
      state.name
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLoadLocalLogin')
}

export function useStore(): Store<ISroteType> {
  return useVuexStore()
}

export default store
