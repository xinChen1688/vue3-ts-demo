<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <!-- 登陆卡片 -->
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span><i class="el-icon-user-solid"></i> 账号登陆</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span><i class="el-icon-mobile-phone"></i>手机登陆</span>
          </span>
        </template>
        <loginPhone />
      </el-tab-pane>
    </el-tabs>
    <!-- 记住密码 -->
    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <!-- 登陆 -->
    <el-button type="primary" class="login-btn" @click="hanleLoginClick"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const iskeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof loginAccount>>()

    const hanleLoginClick = () => {
      console.log('立即登陆')
      accountRef.value?.loginAction()
    }

    return { iskeepPassword, hanleLoginClick, accountRef }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
