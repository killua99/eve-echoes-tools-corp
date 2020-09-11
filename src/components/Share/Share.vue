<template>
  <div>
    <label class="export">
      <p>Export:</p>
      <input
        class="export-field"
        :value="exportStore"
        placeholder="Nothing to export yet"
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
    <div v-if="importDone">
      <h3>Import success</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue'

import { LOCAL_STORE_ITEMS_KEY } from '@/store/localStorage'

export default defineComponent({
  name: 'ShareComponent',
  setup() {

    const urlParams = new URLSearchParams(window.location.search);
    const importParam = urlParams.get('import');

    const items = ref<Array<{ id: string; name: string; cost: number; }>>([])
    const exportStore = ref('')
    const importStoreValue = ref('')
    const importDone = ref(false)
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

      if (importParam) {
        importStoreValue.value = importParam
        importStore()
      }

      getExport()
    });

    const getExport = () => {
      if (items.value.length < 1) return;

      const store = {
        storeItems: items.value
      }

      exportStore.value = 'https://killua99.github.io/eve-echoes-tools-corp/share?import=' + btoa(JSON.stringify([store]))
    }

    const onFocusExport = (target: HTMLInputElement) => {
      target.select()
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
    }

    const importStore = () => {
      if (importStoreValue.value === '') return

      const storeBase64 = atob(importStoreValue.value)
      const storeToSet = JSON.parse(storeBase64)

      interface storesType {
        storeItems: Array<{ id: string; name: string; cost: number; }>
        storeContractItems: Array<{ id: string; name: string; cost: number; }>
      }

      storeToSet.map(function(stores: storesType) {
        const { storeItems, storeContractItems } = stores

        if (storeItems) {
          items.value = storeItems
        }

        if (storeContractItems) {
          // TODO: Finish the contract import
        }

        importDone.value = true
      })

      items.value.push = storeToSet.items ? storeToSet.items : []
    }


    return {
      importDone,
      importStoreValue,
      exportStore,
      onFocusExport,
      importStore
    }
  }
})
</script>
