/* eslint-disable vue/no-v-model-argument */
<template>
  <Layout>
    <NewItem
      v-model:item-name="itemName"
      v-model:item-cost="itemCost"
      @add-new-item="addNewItem"
    />
    <ul class="list">
      <Item
        v-for="item in items"
        :key="item.id"
        :item-name="item.name"
        :item-cost="item.cost"
        class="list-item"
      />
    </ul>
  </Layout>
</template>

<script lang="ts">
import { ref, onBeforeMount, watch, defineComponent } from 'vue'
// import { useStore } from 'vuex'
import { nanoid } from 'nanoid';

import Layout from '@/components/Layout'
import NewItem from '@/components/NewItem'
import Item from '@/components/Item'
import { LOCAL_STORE_ITEMS_KEY } from '@/store/localStorage'

export default defineComponent({
  name: "Items",
  components: {
      Layout,
      NewItem,
      Item,
  },
  setup() {

    // const store = useStore()

    const items = ref<Array<{ id: string; name: string; cost: number; }>>([])

    const itemName = ref('')
    const itemCost = ref('')

    watch(
      items,
      (items) => {
        localStorage.setItem(LOCAL_STORE_ITEMS_KEY, JSON.stringify([...items]))
      },
      {
        deep: true
      }
    )

    onBeforeMount(() => {
      const localStorageValue = localStorage.getItem(LOCAL_STORE_ITEMS_KEY);
      const itemsToSet = localStorageValue ? JSON.parse(localStorageValue) : [];
      items.value = itemsToSet;
    });

    function addNewItem(): void {
      console.log(itemName.value)
      if (itemName.value === '') {
        return
      }
      items.value.push({
        id: `${nanoid()}`,
        name: itemName.value,
        cost: parseInt(itemCost.value)
      })
      itemName.value = ''
      itemCost.value = ''
    }

    return {
      itemName,
      itemCost,
      items,
      addNewItem
    }
  }
})
</script>

<style lang="scss" scope>
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  padding: 0 .3em;
  text-align: initial;

  &-item {
    font-size: 1.3em;
    background: rgb(10, 26, 48);
    padding: .6em .3em;
    margin-bottom: .1em;

    &-name {
      display: inline-block;
      width: 50%;
    }
    &-cost {

    }
  }
}
</style>
