export const contentTableConfig = {
  // 标题
  title: '角色管理',
  // 内容配置
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
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
