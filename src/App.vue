<template>
  <inventory-page></inventory-page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InventoryPage from "@/components/InventoryPage.vue";

@Options({
  components: {
    InventoryPage
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
  padding: 0;
}

body{
  background-color: #1D1D1D;
  padding: 0;
  margin: 0;
}
</style>
