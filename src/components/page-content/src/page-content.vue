<template>
  <div class="page-content">
    <hy-table :listData="listData" v-bind="contentTableConfig">
      <!-- 1header插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="mini">新建用户</el-button>
      </template>
      <!-- 2列的插槽 -->
      <template #status="{ row }">
        <el-button size="mini" plain :type="row.enable ? 'success' : 'info'">
          {{ row.enable ? '已启用' : '已禁用' }}
        </el-button>
      </template>
      <template #createAt="{ row }">{{
        $filters.foomatTime(row.createAt)
      }}</template>
      <template #update="{ row }">{{
        $filters.foomatTime(row.update)
      }}</template>
      <template #handler>
        <div class="handler-">
          <el-button size="mini" type="text" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button size="mini" type="text" icon="el-icon-delete"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 页脚 -->
      <template #footer> </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import HyTable from '@/base-ui/table'
export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const listData = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    return { listData }
  }
})
</script>

<style scoped></style>
