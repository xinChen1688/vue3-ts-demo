import { ILoginState } from './login/type'
import { ISystmeState } from './main/system/types'
export interface IRootState {
  name: string
}

export interface IRootAndModule {
  login: ILoginState
  system: ISystmeState
}

export type ISroteType = IRootState & IRootAndModule
