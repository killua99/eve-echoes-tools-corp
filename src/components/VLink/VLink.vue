<template>
  <a 
    :href="href" 
    :title="title" 
    class="menu-item"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
