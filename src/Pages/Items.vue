<template>
  <Layout>
    <ul>
      <Item
        v-for="item in ItemsList"
        :key="item.id"
      />
    </ul>
    <NewItem
      :new-item="newItem"
      @add-new-item="addNewItem"
    />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import NewItem from '@/components/NewItem'
import Item from '@/components/Item'

export default {
  name: 'Calc',
  components: {
    Layout,
    NewItem,
    Item
  }
}
</script>