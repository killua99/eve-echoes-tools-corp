<template>
  <li>
    <span
      class="list-item-name"
      @click="expandControls"
    >{{ item.name }}</span> Qty:
    <input
      type="number"
      min="0"
      max="999999"
      :value="itemQuantity"
      @input="$emit(updateQuantity)"
    >
    <img
      class="list-item-delete"
      src="../Item/trash-alt-solid.svg"
      @click="deleteItem"
    >
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { trashAltSolid } from '@/assets/icons'

export default defineComponent({
  name: 'ContractItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    itemKey: {
      type: String,
      required: true
    },
    itemQuantity: {
      type: Number,
      required: true,
      default: 0
    },
    contract: {
      type: Object,
      required: true
    }
  },
  setup(_, { emit }) {
    const controlsExpanded = ref(false)

    const expandControls = (): void => {
      controlsExpanded.value = !controlsExpanded.value
    }

    const deleteItem = () => {
      emit('delete-contract-item', _.item.id)
    }

    const updateQuantity = () => {
      emit('update-quantity')
    }

    return {
      controlsExpanded,
      expandControls,
      deleteItem,
      updateQuantity
    }
  },
  data() {
    return {
      trashAltSolid: trashAltSolid
    }
  }
})
</script>

<style lang="scss" scoped>

.list-item {

  display: flex;

  &-name {
    width: 50%;
  }

  &-delete {
    background: #999;
    padding: .2em;
    margin-left: auto;
    margin-right: .3em;
  }

  input {
    width: 3em;
    margin-left: .3em;
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  img {
    width: 1em;
  }
}
</style>
