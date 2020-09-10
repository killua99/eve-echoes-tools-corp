<template>
  <Layout>
    <template #:default>
      Default content
    </template>
    <template #:footer>
      <p>Footer uno</p>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}

</script>

<style>

</style>
