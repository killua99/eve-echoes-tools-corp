<template>
  <div>
    <select
      v-model="itemSelected"
      :item-selected-prop="itemSelected"
      @change="$emit('update:itemSelected', $event.target.value)"
    >
      <option
        disabled
        value=""
      >
        Select an item
      </option>
      <option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>
    <button
      class="button-add"
      @click="addItem"
    >
      ➕
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NewContractItem',
  props: {
    itemSelectedProp: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  setup(_, { emit }) {
    const itemSelected = ref('')

    const addItem = (): void => {
      emit('add-item')
    }

    return {
      itemSelected,
      addItem
    }
  }
})
</script>

<style lang="scss" scoped>
.button-add {
  margin: 0;
  margin-left: 1em;
  padding: 0;
}
</style>
