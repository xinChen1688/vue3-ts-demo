<template>
  <div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link nav-avatar">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span class="name-info">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-circle-close"
              >退出登陆</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-user-solid"
              >用户信息</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-s-tools">系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.name)

    return { name }
  }
})
</script>

<style scoped lang="less">
.nav-avatar {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  .name-info {
    font-size: 0.7rem;
  }
}
</style>
