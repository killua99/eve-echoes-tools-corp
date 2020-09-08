<template>
  <Layout>
    <template v-slot:default>
      Default content
    </template>
    <template v-slot:footer>
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
