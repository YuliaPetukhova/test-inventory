<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class RightPanel extends Vue {

}
</script>

<template>
  <div class="right-panel">
    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter">77</div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter"></div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.right-panel {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
}

.table-cell {
  flex: 1;
  height: 100px;
  border-bottom: 1px solid #4D4D4D;
  border-right: 1px solid #4D4D4D;
  cursor: pointer;

  &:last-child {
    border-top-right-radius: 12px
  }

  &:first-child {
    border-top-left-radius: 12px
  }

  .cell-image-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    position: relative;

    .cell-image-main {
      background-color: #7FAA65;
      width: 54px;
      height: 54px;
      margin: 29px 31px 23px 26px;
    }

    .cell-image-blur {
      position: absolute;
      margin: 23px 25px 29px 32px;
      width: 54px;
      height: 54px;
      background-color: rgba(127, 170, 101, 0.35);
      backdrop-filter: blur(22px);
    }
  }
}

.table-cell:hover {
  background-color: #2F2F2F;
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