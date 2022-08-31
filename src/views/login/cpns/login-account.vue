<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    // 用户名或密码
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    // 登陆
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('token')
        }
      })
      console.log('loginAction登陆~~~')
    }

    return { account, rules, loginAction, formRef }
  }
})
</script>

<style scoped></style>
