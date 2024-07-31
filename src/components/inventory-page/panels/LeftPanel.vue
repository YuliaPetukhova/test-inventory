<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class LeftPanel extends Vue {

}
</script>

<template>
  <div class="left-panel">

    <div class="left-panel-image">
      <img src="../../../assets/Img.png" alt="Main image">
    </div>
    <div class="left-panel-content">
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-panel {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-right: 24px;
  max-height: 500px;
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;

  .left-panel-content {
    margin: 0 22px 24px 22px;
  }

  .left-panel-content p {
    padding: 0;
    margin: 0 0 16px 0;
  }

  .left-panel-image {
    padding: 18px 14px 20px 14px;
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