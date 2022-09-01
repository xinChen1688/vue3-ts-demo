<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    // 获取store
    const store = useStore()
    // 用户名或密码
    const account = reactive({
      name: localCache.getCache('name') ?? 'coderwhy',
      password: localCache.getCache('password') ?? '123456'
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    // 登陆
    const loginAction = (iskeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log(iskeepPassword)
          // 记住密码时执行本地保存
          if (iskeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deletecaChe('name')
            localCache.deletecaChe('password')
          }
          // 2 进行登陆页面跳转
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return { account, rules, loginAction, formRef }
  }
})
</script>

<style scoped></style>
