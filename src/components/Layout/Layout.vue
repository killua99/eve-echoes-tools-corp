<template>
  <header class="superman">
    <Menu />
    <slot name="main" />
  </header>
  <main>
    <section>
      <slot />
    </section>
    <aside v-if="hasAside">
      <slot name="aside" />
    </aside>
  </main>
  <footer>
    <slot name="footer" />
    <p>&copy; {{ new Date().getFullYear() }} Written by <a class="copy-link" href="https://github.com/killua99">@killua99</a></p>
  </footer>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    Menu
  },
  computed: {
    hasAside () {
      return !!this.$slots.aside
    }
  }
}
</script>

<style lang="scss">
@font-face {font-family: "Shentox W04 Light"; src: url("//db.onlinewebfonts.com/t/b2788bae58c7ed7c0d6abf3b054b23a1.eot"); src: url("//db.onlinewebfonts.com/t/b2788bae58c7ed7c0d6abf3b054b23a1.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/b2788bae58c7ed7c0d6abf3b054b23a1.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/b2788bae58c7ed7c0d6abf3b054b23a1.woff") format("woff"), url("//db.onlinewebfonts.com/t/b2788bae58c7ed7c0d6abf3b054b23a1.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/b2788bae58c7ed7c0d6abf3b054b23a1.svg#Shentox") format("svg"); } 
@font-face {font-family: "Shentox W04 Regular"; src: url("//db.onlinewebfonts.com/t/5c773d1586db24bd45dfd4af3a4542e7.eot"); src: url("//db.onlinewebfonts.com/t/5c773d1586db24bd45dfd4af3a4542e7.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/5c773d1586db24bd45dfd4af3a4542e7.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/5c773d1586db24bd45dfd4af3a4542e7.woff") format("woff"), url("//db.onlinewebfonts.com/t/5c773d1586db24bd45dfd4af3a4542e7.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/5c773d1586db24bd45dfd4af3a4542e7.svg#Shentox") format("svg"); } 
$retina: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)";

html {
  background: rgba(10, 26, 48, .7);
}
#app {
  font-family: 'Shentox W04 Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
}
header {
  position: fixed;
  z-index: 1;
  top: 2em;
  width: 100vw;

  @media (min-width: 480px) {
    
  }
}

main {
  position: relative;
  margin-top: 6em;
  flex: 1 0 auto;
}

footer {
  margin-bottom: 0;
}

.copy-link {
  text-decoration: none;
  color: rgb(127, 185, 186);
}
</style>