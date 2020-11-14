<template>
  <nav
    id="main-menu"
    class="menu"
  >
    <v-link
      href="./"
      title="Home"
    >
      Home
    </v-link>
    <v-link
      href="./calc"
      title="Contract Calculator"
    >
      Contract Calculator
    </v-link>
    <v-link
      href="./items"
      title="Items"
    >
      List Items
    </v-link>
  </nav>
</template>

<script>
import VLink from '@/components/VLink'

export default {
  components: {
    VLink
  }
}
</script>

<style lang="scss">
.menu {
  display: flex;
  margin: 0 auto;
  width: auto;
  justify-content: center;
  &-item {
    background: rgb(10, 26, 48);
    color: rgb(127, 185, 186);
    font-family: 'Shentox W04 Light';
    text-decoration: none;
    display: block;
    padding: .4em;
    flex: 0 1 auto;
    margin: 0 1px;
  }
}
</style>
