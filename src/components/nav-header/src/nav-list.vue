<template>
  <div class="list">
    <div class="item">
      <el-dropdown>
        <span class="el-dropdown-link nav-avatar">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>员工绩效</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="item">
      <el-dropdown>
        <span class="el-dropdown-link nav-avatar">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>最新消息</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.list {
  display: flex;
  .item {
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>
