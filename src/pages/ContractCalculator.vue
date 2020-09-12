<template>
  <Layout>
    <NewContractItem
      v-model:item-selected-prop="itemSelected"
      v-model:item-selected="itemSelected"
      v-model:items="items"
      @add-item="addItem"
    />
    <ul class="list">
      <ContractItem
        v-for="item in contractItems"
        :key="item.id"
        :item-key="item.id"
        :item="filterItems(item.itemId)"
        :item-quantity="item.cost"
        :contract="item"
        class="list-item"
        @update-quantity="updateQuantity"
        @delete-contract-item="deleteContractItem"
      />
    </ul>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, watch } from 'vue'
import { nanoid } from 'nanoid';

import Layout from '@/components/Layout'
import NewContractItem from '@/components/NewContractItem'
import ContractItem from '@/components/NewContractItem/ContractItem.vue'
import { LOCAL_STORE_ITEMS_KEY, LOCAL_STORE_CONTRACT_ITEMS_KEY } from '@/store/localStorage'

export default defineComponent({
  name: 'Calc',
  components: {
    Layout,
    NewContractItem,
    ContractItem
  },
  setup() {

    const items = ref<Array<{ id: string; name: string; cost: number; }>>([])
    const contractItems = ref<Array<{ id: string; itemId: string; cuantity: number; }>>([])
    const itemSelected = ref('')

    watch(
      contractItems,
      (contractItems) => {
        localStorage.setItem(LOCAL_STORE_CONTRACT_ITEMS_KEY, JSON.stringify([...contractItems]))
      },
      {
        deep: true
      }
    )

    onBeforeMount(() => {
      // TODO: Composite this.
      const localStorageValueItems = localStorage.getItem(LOCAL_STORE_ITEMS_KEY);
      const itemsToSet = localStorageValueItems ? JSON.parse(localStorageValueItems) : [];

      items.value = itemsToSet;

      const localStorageValueContractItems = localStorage.getItem(LOCAL_STORE_CONTRACT_ITEMS_KEY);
      const contractItemsToSet = localStorageValueContractItems ? JSON.parse(localStorageValueContractItems) : [];

      contractItems.value = contractItemsToSet;
    });

    const addItem = (): void => {
      if (itemSelected.value === '') {
        return
      }

      contractItems.value.push({
        id: `${nanoid()}`,
        itemId: itemSelected.value,
        cuantity: 0
      })
      itemSelected.value = ''
    }

    const deleteContractItem = (itemId: String): void => {
      items.value = items.value.filter((item) => item.id !== itemId);
    }

    const filterItems = (itemId: string) => {
      return items.value.find((item) => item.id === itemId)
    }

    const updateQuantity = () => {
      console.log()
    }

    return {
      items,
      itemSelected,
      addItem,
      deleteContractItem,
      contractItems,
      filterItems,
      updateQuantity
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
}
</style>
