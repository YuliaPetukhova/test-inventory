<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BottomPanel from "@/components/inventory-page/panels/BottomPanel.vue";
import LeftPanel from "@/components/inventory-page/panels/LeftPanel.vue";
import TopPanels from "@/components/inventory-page/panels/TopPanels.vue";

@Options({
  components: {TopPanels, LeftPanel, BottomPanel}
})
export default class InventoryPage extends Vue {
}
</script>

<template>
  <div class="container">
    <top-panels></top-panels>
    <bottom-panel></bottom-panel>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 32px;
}

.ghost-element {
  width: auto;
  background: linear-gradient(to right, #3C3C3C, #444444, #333333);
  animation: loading 1.5s infinite alternate; /* Анимация */
  border-radius: 12px;
}

@keyframes loading {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>