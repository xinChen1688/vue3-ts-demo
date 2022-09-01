import hyRequest from '../index'
import { IAccount } from './type'
enum loginAPI {
  accountLogin = '/login'
}
export function accountLoginRequest(actions: IAccount) {
  return hyRequest.post({
    url: loginAPI.accountLogin,
    data: actions
  })
}
