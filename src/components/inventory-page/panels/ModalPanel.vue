<script lang="ts">
import {useCellsStore} from "@/components/stores/CellsStore";

export default {
  setup() {
    return {
      useCellsStore: useCellsStore(),
    };
  },
}
</script>

<template>
  <div class="panel">

    <div class="panel-image">

      <div class="cell-image-container">
        <div class="cell-image-blur"></div>
        <div class="cell-image-main"></div>
      </div>

    </div>

    <div class="modal-panel-content">
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
      <p class="ghost-element">Lorem</p>
    </div>

    <div>
      <button type="button" class="modal-button-delete">Удалить предмет</button>
    </div>

    <div class="modal-form-number">
      <input type="number" min="0" class="modal-number" placeholder="Введите количество">

      <div class="modal-buttons">
        <button type="button" class="modal-button-cancel">Отмена</button>
        <button type="button" class="button-confirm">Подтвердить</button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
}

.panel-image {
  padding: 55px 60px 30px 60px;
  box-sizing: border-box;

  .cell-image-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    position: relative;
    height: 130px;

    .cell-image-main {
      background-color: #7FAA65;
      width: 115px;
      height: 115px;
    }

    .cell-image-blur {
      position: absolute;
      margin: -19px 0px 29px 32px;
      width: 115px;
      height: 115px;
      background-color: rgba(127, 170, 101, 0.35);
      backdrop-filter: blur(22px);
    }
  }
}

.modal-panel-content {
  margin: 0 22px 0 22px;
}

.modal-panel-content p {
  padding: 0;
  margin: 0 0 14px 0;
}

.modal-button-delete {
  background-color: #FA7272;
  width: 220px;
  height: 39px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  border: 1px solid #FA7272;
  margin: 0 15px 5px 15px;
  cursor: pointer;
  padding: 0;
}

.modal-number {
  width: 210px;
  height: 40px;
  color: white;
  background-color: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 4px;
  margin: 0 21px 5px 21px;
  box-sizing: border-box;
  padding: 0 12px;
  outline: none;
}

.modal-buttons {
  display: flex;
  flex-direction: row;
  padding: 0 21px;
  box-sizing: border-box;
}

.modal-button-cancel {
  width: 88px;
  height: 33px;
  background-color: white;
  color: #2D2D2D;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid #2D2D2D;
  margin-right: 10px;
  cursor: pointer;
}

.modal-button-cancel:hover {
  box-shadow: 0 0 17px rgba(250, 114, 114, 0.7);
}

.button-confirm {
  width: 112px;
  height: 33px;
  background-color: #FA7272;
  color: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid #FA7272;
  cursor: pointer;
}

.button-confirm:hover {
  box-shadow: 0 0 17px rgba(250, 114, 114, 0.7);
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