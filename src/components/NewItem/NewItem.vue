<template>
  <div>
    <input
      type="text"
      :value="itemName"
      placeholder="Item name"
      @input="$emit('update:itemName', $event.target.value)"
    >
    <input
      type="number"
      min="0"
      max="999999"
      :value="itemCost"
      class="newPrice"
      placeholder="Cost / Unit"
      @input="$emit('update:itemCost', $event.target.value)"
      @keyup.enter="addNewItem"
    >
    <button
      class="button"
      @click="addNewItem"
    >
      ➕
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemCost: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {

    function addNewItem() {
      emit('add-new-item')
    }
    return { addNewItem }
  }
})
</script>

<style lang="scss" scope>
.newItem {
  background-color: var(--color-todo-background);
  border: 1px solid var(--color-todo-border);
  font-size: 24px;
  line-height: 1.4em;
  padding: 16px 16px 16px 76px;
  position: relative;
  width: 100%;
}
.newPrice {
  width: 55px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
.button {
  padding: 0;
}
</style>
