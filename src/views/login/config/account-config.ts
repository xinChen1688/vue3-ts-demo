// 用户名密码的验证规则
export const rules = {
  name: [
    {
      //必传
      required: true,
      message: '用户名不能为空',
      // 触发 blur失去焦点
      trigger: 'blur'
    },
    {
      // 正则
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      //必传
      required: true,
      message: '密码不能为空',
      // 触发 blur失去焦点
      trigger: 'blur'
    },
    {
      // 正则
      pattern: /^[a-z0-9]{3}/,
      message: '密码必须是三位以上的字母或数字',
      trigger: 'blur'
    }
  ]
}
