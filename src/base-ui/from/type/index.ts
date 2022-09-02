type IFromType = 'input' | 'password' | 'select' | 'detepicker'
export interface IFromItem {
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对options
  options?: any[]
  // 针对特殊属性
  otherOptions?: any
}

export interface IFrom {
  fromItems: IFromItem[]
  labeWidth?: string
  itemStyle: any
  colLayout: any
}
