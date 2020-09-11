<template>
  <nav
    id="footer-menu"
    class="menu"
  >
    <v-link
      href="./share"
      title="Share"
      class="menu-item__share"
    >
      <img
        class="menu-item__share-img"
        src="./share-alt-solid.svg"
      >
    </v-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import VLink from '@/components/VLink'

export default defineComponent({
  name: 'FooterMenu',
  components: {
    VLink
  }
})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0 .3em;

  &-item {
    background: rgb(10, 26, 48);
    color: rgb(127, 185, 186);
    padding: .3em;
    display: inline-block;

    &__share-img {
      width: 1.4em;

    }
  }
}
</style>
