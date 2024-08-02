<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ModalPanel from "@/components/inventory-page/panels/ModalPanel.vue";
import {Icon} from "@iconify/vue";

@Options({
  components: {Icon, ModalPanel}
})
export default class RightPanel extends Vue {
  showModalPanel() {
    const showModalPanel = document.querySelector('.modal-panel');
    showModalPanel!.classList.add('show');
  }

  closeModal() {
    const closeModalPanel = document.querySelector('.modal-panel');
    closeModalPanel!.classList.remove('show');
  }
}
</script>

<template>
  <div class="right-panel">
    <div class="table-cell" @click="showModalPanel">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter">7</div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter">4</div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter">3</div>
    </div>

    <div class="table-cell">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

      <div class="counter">9</div>
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

    <div class="table-cell"></div>

    <div class="modal-panel">
      <Icon icon="carbon:close" class="close-panel-icon" @click="closeModal"/>
      <modal-panel></modal-panel>
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
  width: 525px;
  height: 500px;
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  position: relative;
}

.table-cell {
  position: relative;
  height: 100px;
  width: 20%;
  border-bottom: 1px solid #4D4D4D;
  border-right: 1px solid #4D4D4D;
  cursor: pointer;
  box-sizing: border-box;

  &:first-child {
    border-top-left-radius: 12px;
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
      margin: 23px 19px 29px 32px;
      width: 54px;
      height: 54px;
      background-color: rgba(127, 170, 101, 0.35);
      backdrop-filter: blur(22px);
    }
  }

  .counter {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 0;
    bottom: 0;
    border-radius: 5px 0 0 0;
    padding: 2px 1px 2px 4px;
    border: 1px solid #4D4D4D;
    border-bottom: none;
    font-size: 10px;
    text-align: center;
    line-height: 1;
    color: #ffffff;
    box-sizing: border-box;
  }
}

.table-cell:nth-child(5n+5) {
  border-right: none;
}

.table-cell:nth-child(5n+5):hover {
  background-color: #2F2F2F;
  border-top-right-radius: 12px;
}

.table-cell:nth-child(1n+1) {
  border-left: none;
}

.table-cell:hover {
  background-color: #2F2F2F;
}

.ghost-element {
  width: auto;
  background: linear-gradient(to right, #3C3C3C, #444444, #333333);
  animation: loading 1.5s infinite alternate;
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

.modal-panel {
  height: 500px;
  background-color: rgba(38, 38, 38, 0.96);
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  transition: width 0.6s ease, opacity 0.1s ease;
  box-sizing: border-box;
  opacity: 0;
  width: 0;
  top: 0;
  position: absolute;
  right: 0;
}

.modal-panel.show {
  opacity: 1;
  width: 250px;
}

.close-panel-icon {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  right: 8px;
  cursor: pointer;
  z-index: 1;
}
</style>