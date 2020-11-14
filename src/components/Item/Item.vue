<template>
  <li>
    <span @click="expandControls"><span class="list-item-name">{{ itemName }}</span> ISK <span class="list-item-cost">{{ itemCost }} / Unit</span></span>
    <div
      v-if="controlsExpanded"
      class="controls"
    >
      <button @click="deleteItem">
        <img src="./trash-alt-solid.svg">
      </button>
    </div>
  </li>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Item',
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemCost: {
      type: Number,
      required: true
    },
    itemKey: {
      type: String,
      default: ''
    },
  },
  setup(props, { emit }) {

    const controlsExpanded = ref(false)

    const expandControls = (): void => {
      controlsExpanded.value = !controlsExpanded.value
    }

    const deleteItem = (): void => {
      emit('delete-item', props.itemKey)
    }

    return {
      controlsExpanded,
      expandControls,
      deleteItem
    }
  }
})
</script>

<style lang="scss" scope>

li {
    font-size: 1.3em;
    background: rgb(10, 26, 48);
    padding: .6em .3em;
    margin-bottom: .1em;

    &:nth-child(even) {
      background: rgb(48, 66, 92);
    }


    &-name {
      display: inline-block;
      width: 50%;
    }
}

.controls {
  text-align: right;
  padding: .5em 0;

  button {
    margin: 0;
    padding: 0;

    img {
      width: 1em;
    }
  }
}
</style>
