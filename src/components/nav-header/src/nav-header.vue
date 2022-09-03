<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumb"></hy-breadcrumb>
      <div class="nav-left-info">
        <nav-list></nav-list>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import navList from './nav-list.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }
    // 面包屑数据
    const store = useStore()
    const breadcrumb = computed(() => {
      const route = useRoute()
      const userMenus = store.state.login.userMenu
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { handleFoldClick, isFold, breadcrumb }
  },
  components: {
    userInfo,
    navList,
    HyBreadcrumb
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
