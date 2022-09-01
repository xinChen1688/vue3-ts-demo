<template>
  <div class="login-account">
    <el-form label-width="60px">
      <el-form-item label="手机" prop="phone">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verify-code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button
            class="code-btn"
            type="primary"
            @click="getVerificationCode"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    // 获取store
    const store = useStore()
    // 用户名或密码
    const phone = reactive({
      num: '1233211234567',
      code: ''
    })
    // 获取验证码
    const getVerificationCode = () => {
      console.log('获取验证码')
    }
    // 手机登陆按钮
    const loginAction = () => {
      console.log('手机')
      store.dispatch('login/phoneLoginAction', { ...phone })
    }

    return { phone, rules, loginAction, getVerificationCode }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.code-btn {
  margin-left: 8px;
}
</style>
