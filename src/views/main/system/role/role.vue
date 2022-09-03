<template>
  <div class="role">
    <page-search :searchformConfig="searchformConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { searchformConfig } from './config/search.config'
export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    return { contentTableConfig, searchformConfig }
  }
})
</script>

<style scoped></style>
