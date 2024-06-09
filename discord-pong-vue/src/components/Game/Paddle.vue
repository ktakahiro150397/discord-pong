<script setup lang="ts">
import { ref, onMounted } from "vue";

const paddle = ref({
  posX: 40,
  posY: 100,
  width: 0,
  height: 0,
});

const pressState = ref({
  up: false,
  down: false,
});

const posX_MIN = 0;
const posX_MAX = 76;

function initializePaddle() {}

onMounted(() => {
  // Add keydown event listener
  window.addEventListener("keydown", (e) => {
    console.log(e.key, paddle.value.posX);
    if (e.key === "ArrowUp") {
      pressState.value.up = true;
    }
    if (e.key === "ArrowDown") {
      pressState.value.down = true;
    }
  });

  window.addEventListener("keyup", (e) => {
    console.log(e.key, paddle.value.posX);
    if (e.key === "ArrowUp") {
      pressState.value.down = false;
    }
    if (e.key === "ArrowDown") {
      pressState.value.down = false;
    }
  });

  //   if (posX_MIN < paddle.value.posX && paddle.value.posX <= posX_MAX) {
  //     paddle.value.posX -= 1;
  //   }
  // } else if (e.key === "ArrowDown") {
  //   if (posX_MIN <= paddle.value.posX && paddle.value.posX < posX_MAX) {
  //     paddle.value.posX += 1;
  //   }
  // }
});
</script>

<template>
  <div id="paddle" :style="{ top: paddle.posX + '%' }"></div>
</template>

<style scoped>
#paddle {
  background-color: orange;
  position: absolute;
  top: 30%;
  left: 10%;
  width: 10px;
  height: 150px;
}
</style>
