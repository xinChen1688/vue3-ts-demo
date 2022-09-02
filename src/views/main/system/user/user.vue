<template>
  <div class="user">
    <hy-from v-bind="searchformConfig"></hy-from>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyFrom from '@/base-ui/from'
import { searchformConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    HyFrom
  },
  setup() {
    return { searchformConfig }
  }
})
</script>

<style scoped></style>
