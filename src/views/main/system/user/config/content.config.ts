export const contentTableConfig = {
  // 标题
  title: '用户管理',
  // 内容配置
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '电话', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '50', slotName: 'status' },
    {
      prop: 'createAt',
      label: '注册时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'update',
      label: '更新时间',
      minWidth: '100',
      slotName: 'update'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],

  // 是否需要序号
  showIndexColumn: true,
  // 是否需要全选
  showSelectColumn: true
}
