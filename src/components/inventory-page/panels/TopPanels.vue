<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import LeftPanel from "@/components/inventory-page/panels/LeftPanel.vue";
import RightPanel from "@/components/inventory-page/panels/RightPanel.vue";

@Options({
  components: {RightPanel, LeftPanel}
})
export default class TopPanels extends Vue {

}
</script>

<template>
  <div class="top-panels">
    <left-panel></left-panel>
    <right-panel></right-panel>
  </div>

</template>

<style scoped lang="scss">

.top-panels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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