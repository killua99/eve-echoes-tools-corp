<template>
  <div>
    <label class="export">
      <p>Export:</p>
      <input
        class="export-field"
        :value="exportStore"
        @focus="onFocusExport($event.target)"
      >
    </label>
    <label>
      <p>Import:</p>
      <input
        v-model.trim="importStoreValue"
        class="import-field"
        @keyup.enter="importStore"
      >
      <button
        class="import-field"
        @click="importStore"
      >Import</button>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue'

import { LOCAL_STORE_ITEMS_KEY } from '@/store/localStorage'

export default defineComponent({
  name: 'ShareComponent',
  setup() {

    const items = ref<Array<{ id: string; name: string; cost: number; }>>([])
    const exportStore = ref('')
    const importStoreValue = ref('')
    // LOCAL_STORE_CONTRACT_ITEMS_KEY
    // const contractItems = ref<Array<{ id: string; itemId: string; quantity: number; }>>([])

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
      getExport(items)
    });

    const getExport = (items: typeof items) => {
      if (items._rawValue.length < 1) return;

      const store = {
        storeItems: items.value
      }

      exportStore.value =  btoa(JSON.stringify([store]))
    }

    const onFocusExport = (target: HTMLInputElement) => {
      target.select()
    }

    const importStore = () => {
      if (importStoreValue.value === '') return

      const storeBase64 = atob(importStoreValue.value)
      const storeToSet = JSON.parse(storeBase64)

      storeToSet.map(stores => {
        const { storeItems, storeContractItems } = stores

        if (storeItems) {
          items.value = storeItems
        }

        if (storeContractItems) {
          // TODO: Finish the contract import
        }
      })

      items.value.push = storeToSet.items ? storeToSet.items : []
    }


    return {
      importStoreValue,
      exportStore,
      onFocusExport,
      importStore
    }
  }
})
</script>
