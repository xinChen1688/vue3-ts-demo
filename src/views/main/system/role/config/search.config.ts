import { IFrom } from '@/base-ui/from'
export const searchformConfig: IFrom = {
  labeWidth: '120px',
  itemStyle: { padding: '10px 40px 10px 0' },
  colLayout: {
    // >= 1920  4
    xl: 6,
    // >= 1200  8
    lg: 8,
    // >= 992  12
    md: 12,
    // >=768
    sm: 12,
    // <678
    xs: 24
  },
  fromItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'detepicker',
      label: '时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
