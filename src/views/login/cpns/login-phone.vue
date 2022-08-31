<template>
  <div class="login-account">
    <el-form label-width="60px">
      <el-form-item label="手机" prop="phone">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verify-code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="code-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    // 用户名或密码
    const phone = reactive({
      num: '',
      code: ''
    })

    return { phone, rules }
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
