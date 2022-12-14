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
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请喜欢的运动',
      options: [
        { title: '篮球', value: 'bbb' },
        { title: '蔡徐坤', value: 'aaa' }
      ]
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
