<script lang="ts">
import ModalPanel from "@/components/inventory-page/panels/ModalPanel.vue";
import {Icon} from "@iconify/vue";
import draggable from "vuedraggable";
import {useCellsStore} from "@/components/stores/CellsStore";

export default {
  components: {Icon, ModalPanel, draggable},

  setup() {
    return {
      useCellsStore: useCellsStore(),
    };
  },

  methods: {
    showModalPanel() {
      const showModalPanel = document.querySelector('.modal-panel');
      showModalPanel!.classList.add('show');
    },

    closeModal() {
      const closeModalPanel = document.querySelector('.modal-panel');
      closeModalPanel!.classList.remove('show');
    }
  }
};
</script>

<template>
  <div class="right-panel">

    <draggable v-model="useCellsStore.data"
                 class="rows" item-key="name">

      <template #item="{ element }">

        <div class="table-cell" @click="showModalPanel">
          <div class="cell-image-container" v-if="!element.empty">
            <div class="cell-image-blur" :style="{'background-color': element.blurBackgroundColor}"></div>
            <div class="cell-image-main" :style="{'background-color': element.mainBackgroundColor}"></div>
          </div>
          <div class="counter">{{ element.count }}</div>
        </div>
      </template>
    </draggable>

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
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  width: 526.5px;
  height: 501px;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  background-color: #262626;
}

.rows {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 525px;
  height: 100px;
}

.table-cell {
  position: relative;
  background-color: #262626;
  height: 100px;
  width: 105px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  border: 1px solid #4D4D4D;
  border-top: none;
  border-left: none;

  &:first-child {
    border-top-left-radius: 12px;
    border-top: none;
  }

  &:last-child {
    border-bottom-right-radius: 12px;
    border-bottom: none;
  }

  .cell-image-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    position: relative;
    height: 100px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .cell-image-main {
      width: 54px;
      height: 54px;
      margin:25px 28px 20px 22px;
    }

    .cell-image-blur {
      position: absolute;
      margin: 19px 19px 21px 29px;
      width: 54px;
      height: 54px;
      backdrop-filter: blur(22px);
    }
  }

  .counter {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 0;
    bottom: 0;
    border-radius: 5px 0 0 0;
    padding: 2px 1px 2px 4px;
    border: 1px solid #4D4D4D;
    border-bottom: none;
    border-right: none;
    font-size: 10px;
    text-align: center;
    line-height: 1;
    color: #ffffff;
    box-sizing: border-box;
  }
}

.table-cell:nth-child(5) {
  border-top-right-radius: 12px;
}

.table-cell:nth-child(5n+5) {
  border-right: none;
}

.table-cell:nth-child(5):hover {
  background-color: #2F2F2F;
}

.table-cell:nth-child(21) {
  border-bottom: none;
  border-left: none;
  border-bottom-left-radius: 12px;
}

.table-cell:nth-child(22) {
  border-bottom: none;
}

.table-cell:nth-child(23) {
  border-bottom: none;
}
.table-cell:nth-child(24) {
  border-bottom: none;
}
.table-cell:nth-child(25) {
  border-bottom: none;
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