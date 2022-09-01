<template>
  <div class="not-found">
    <h2>Not Found</h2>
    <h2>访问的页面不存在, 请不要修改路径~</h2>
    <el-button type="info" plain class="btn" @click="goRouter"
      >退回原路径</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
export default defineComponent({
  setup() {
    const goRouter = () => {
      router.go(-1)
    }
    return { goRouter }
  }
})
</script>

<style scoped lang="less">
.not-found {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 70%;
  .btn {
    width: 150px;
  }
}
</style>
