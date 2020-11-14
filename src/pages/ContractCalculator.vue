<template>
  <Layout>
    <NewContractItem
      v-model:item-selected-prop="itemSelected"
      v-model:item-selected="itemSelected"
      v-model:items="items"
      @add-item="addItem"
    />
    <ul class="contract-list">
      <ContractItem
        v-for="item in contractItems"
        :key="item.id"
        :item-key="item.id"
        :item="filterItems(item.itemId)"
        :item-quantity="item.quantity"
        :contract="item"
        class="list-item"
        @update-quantity="updateQuantity"
        @delete-contract-item="deleteContractItem"
      />
    </ul>
    <div class="total-contract">
      <span>Total: {{ totalContract }}</span>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from 'vue'
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
    const contractItems = ref<Array<{ id: string; itemId: string; quantity: number; }>>([])
    const itemSelected = ref('')

    const totalContract = computed(() => {
      let total: number = 0

      contractItems.value.forEach((contractItem) => {
        const item = filterItems(contractItem.itemId)

        if (!item) return

        total = total + (item.cost * contractItem.quantity)
      })

      return total
    })

    watch(
      contractItems,
      (contractItems) => {
        storeSave(LOCAL_STORE_CONTRACT_ITEMS_KEY, contractItems)
        // localStorage.setItem(LOCAL_STORE_CONTRACT_ITEMS_KEY, JSON.stringify([...contractItems]))
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

    const storeSave = (key: string, entities: Object[]): void => {
      localStorage.setItem(key, JSON.stringify([...entities]))
    }

    const addItem = (): void => {
      if (itemSelected.value === '') {
        return
      }

      contractItems.value.push({
        id: `${nanoid()}`,
        itemId: itemSelected.value,
        quantity: 0
      })
      itemSelected.value = ''
    }

    const deleteContractItem = (itemId: String): void => {
      contractItems.value = contractItems.value.filter((item) => item.id !== itemId);
    }

    const filterItems = (itemId: string) => {
      return items.value.find((item) => item.id === itemId)
    }

    const updateQuantity = (contractItem: any) => {
      const matchedEditContractItem = contractItems.value.find((item) => item.id === contractItem.id);
      if (!matchedEditContractItem) return
      matchedEditContractItem.quantity = contractItem.quantity === '' ? 0 : contractItem.quantity;
      storeSave(LOCAL_STORE_CONTRACT_ITEMS_KEY, contractItems.value)
    }

    return {
      items,
      itemSelected,
      addItem,
      deleteContractItem,
      contractItems,
      filterItems,
      updateQuantity,
      totalContract
    }
  }
})
</script>

<style lang="scss" scope>
.contract-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  padding: 0 .3em;
  text-align: initial;
}
</style>
