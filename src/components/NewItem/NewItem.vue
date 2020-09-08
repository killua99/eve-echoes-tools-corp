<template>
  <div>
    <input
      type="text"
      :value="newItem"
      placeholder="Name of the item"
      @input="$emit('update:Items', $event.target.value)"
      @keyup.enter="addNewItem"
    />    
    <input
      type="number"
      min="0" 
      max="999999"
      :value="newItem"
      class="newPrice"
      placeholder="Name of the item"
      @input="$emit('update:Items', $event.target.value)"
      @keyup.enter="addNewItem"
    />
    <button @click="addNewItem">
      ➕
    </button>
  </div>
</template>

<script>
export default {
  props: {
    newItem: {
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
}
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
</style>