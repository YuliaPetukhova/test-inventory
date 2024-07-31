<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Icon} from '@iconify/vue';

@Options({
  components: {Icon}
})
export default class InventoryPage extends Vue {
}
</script>

<template>
  <div class="container">
    <div class="top-panels">
      <div class="left-panel">

        <div class="left-panel-image">
          <img src="../assets/Img.png" alt="Main image">
        </div>
        <div class="left-panel-content">
          <p class="ghost-element">Lorem</p>
          <p class="ghost-element">Lorem</p>
          <p class="ghost-element">Lorem</p>
          <p class="ghost-element">Lorem</p>
          <p class="ghost-element">Lorem</p>
        </div>
      </div>
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
    </div>

    <div class="bottom-panel">
      <Icon icon="carbon:close" class="bottom-panel-icon"/>
      <div class="bottom-panel-content ghost-element">
        Lorem ipsum dolor sit amet.
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 32px;
}

.top-panels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

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