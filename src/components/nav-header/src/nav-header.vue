<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div class="title">面包屑</div>
      <div class="nav-left-info">
        <nav-list></nav-list>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'
import navList from './nav-list.vue'
export default defineComponent({
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }
    return { handleFoldClick, isFold }
  },
  components: {
    userInfo,
    navList
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-left-info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
