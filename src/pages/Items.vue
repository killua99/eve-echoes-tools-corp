/* eslint-disable vue/no-v-model-argument */
<template>
  <Layout>
    <NewItem
      v-model:item-name="itemName"
      v-model:item-cost="itemCost"
      @add-new-item="addNewItem"
    />
    <ul>
      <Item
        v-for="item in items"
        :key="item.id"
        :item-name="item.name"
        :item-cost="item.cost"
      />
    </ul>
  </Layout>
</template>

<script lang="ts">
import { reactive, ref, onBeforeMount, watch, defineComponent, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { nanoid } from 'nanoid';

import Layout from "@/components/Layout"
import NewItem from "@/components/NewItem"
import Item from "@/components/Item"

export default defineComponent({
  name: "Items",
  components: {
      Layout,
      NewItem,
      Item,
  },
  setup() {

    const LOCAL_STORE_ITEMS_KEY = 'ee_tools_corp_items'

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
