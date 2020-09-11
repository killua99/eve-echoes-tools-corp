<template>
  <li class="">
    <span class="list-item-name">{{ itemName }}</span> ISK <span class="list-item-cost">{{ itemCost }} / Unit</span>
  </li>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemCost: {
      type: Number,
      required: true
    }
  },
};
</script>
