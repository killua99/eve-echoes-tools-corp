<template>
  <li>
    <span
      class="list-item-name"
    >{{ item.name }}</span> Qty:
    <input
      type="number"
      min="0"
      max="999999"
      :value="itemQuantity"
      @input="updateQuantity($event.target.value)"
    >
    <img
      class="list-item-delete"
      src="../Item/trash-alt-solid.svg"
      @click="deleteItem"
    >
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'

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
    },
    contract: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const controlsExpanded = ref(false)

    const { contract } = toRefs(props)

    const expandControls = (): void => {
      controlsExpanded.value = !controlsExpanded.value
    }

    const deleteItem = () => {
      emit('delete-contract-item', contract.value.id)
    }

    const updateQuantity = (quantity: Number) => {
      contract.value.quantity = quantity
      emit('update-quantity', contract.value)
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
  font-size: 1.3em;
  background: rgb(10, 26, 48);
  padding: .6em .3em;
  margin-bottom: .1em;

  &:nth-child(even) {
    background: rgb(48, 66, 92);
  }

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
    width: 4em;
    margin-left: .3em;
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  img {
    width: 1em;
  }
}
</style>
