<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Icon} from "@iconify/vue";

@Options({
  components: {Icon}
})
export default class BottomPanel extends Vue {

}
</script>

<template>
  <div class="bottom-panel">
    <Icon icon="carbon:close" class="bottom-panel-icon"/>
    <div class="bottom-panel-content ghost-element">
      Lorem ipsum dolor sit amet.
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom-panel {
  position: relative;
  margin-top: 24px;
  background-color: #262626;
  height: 72px;
  border: 1px solid #4D4D4D;
  border-radius: 12px;

  .bottom-panel-content {
    height: 36px;
    margin: 18px 68px 18px 18px;
  }

  .bottom-panel-icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
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