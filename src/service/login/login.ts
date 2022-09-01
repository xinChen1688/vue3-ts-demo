import hyRequest from '../index'
import { IAccount, ILoginResult, IDataType } from './type'
enum loginAPI {
  accountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(actions: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.accountLogin,
    data: actions,
    showLoading: true
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<any>({
    url: loginAPI.LoginUserInfo + id,
    showLoading: true
  })
}

export function requestUserMenuByRoleId(id: number) {
  return hyRequest.get<any>({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: true
  })
}
