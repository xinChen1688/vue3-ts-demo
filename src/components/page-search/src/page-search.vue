<template>
  <div class="page-search">
    <hy-from v-bind="searchformConfig" v-model="fromData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="btn">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">按钮</el-button>
        </div>
      </template>
    </hy-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyFrom from '@/base-ui/from'

export default defineComponent({
  components: {
    HyFrom
  },
  props: {
    searchformConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const fromData = ref({
      id: '',
      name: '',
      passwrod: '',
      sport: '',
      createTime: ''
    })
    return { fromData }
  }
})
</script>

<style scoped>
.btn {
  text-align: right;
  padding: 0 40px 50px 0;
}
</style>
