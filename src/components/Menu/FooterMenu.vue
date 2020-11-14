<template>
  <nav
    id="footer-menu"
    class="footer-menu"
  >
    <v-link
      href="./share"
      title="Share"
      class="footer-menu-item__share"
    >
      <img
        class="footer-menu-item__share-img"
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

<style lang="scss">
.footer-menu {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0 .3em;

  &-item {
    background: rgb(10, 26, 48);
    color: rgb(127, 185, 186);
    font-family: 'Shentox W04 Light';
    text-decoration: none;
    display: inline-block;
    padding: .4em;
    flex: 0 1 auto;
    margin: 0 1px;

    &__share-img {
      width: 1.4em;

    }
  }
}
</style>
