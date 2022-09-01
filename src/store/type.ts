import { ILoginState } from './login/type'
export interface IRootState {
  name: string
}

export interface IRootAndModule {
  login: ILoginState
}

export type ISroteType = IRootState & IRootAndModule
