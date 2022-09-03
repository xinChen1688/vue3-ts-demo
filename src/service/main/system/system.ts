import hyRequest from '../../index'

import { IDataType } from '../../typed'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
