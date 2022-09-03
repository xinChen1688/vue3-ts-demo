<template>
  <div class="user">
    <page-search :searchformConfig="searchformConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

import { searchformConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {
      searchformConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
