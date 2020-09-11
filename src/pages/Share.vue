<template>
  <Layout>
    <share-component />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Layout from '@/components/Layout'
import ShareComponent from '@/components/Share'

export default defineComponent({
  name: 'Share',
  components: {
    Layout,
    ShareComponent
  }
})
</script>
