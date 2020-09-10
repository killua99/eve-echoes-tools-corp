<template>
  <li>
    <span>{{ itemName }} - {{ itemCost }}</span>
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
