<script setup lang="ts">
import { executeGameLoop } from "@/core/gameloop";
import { ref, onMounted, computed, defineProps } from "vue";

const props = defineProps<{
  initialYPos: number;
}>();

const paddle = ref({
  posX: 40,
  posY: 0,
});

const pressState = ref({
  up: false,
  down: false,
});

const paddleRef = ref<HTMLImageElement>();

const posX_MIN = 0;
const posX_MAX = 79;

const canMove = computed(() => {
  return {
    canMoveUp: paddle.value.posX > posX_MIN,
    canMoveDown: paddle.value.posX < posX_MAX,
  };
});

function initialize() {
  paddle.value.posY = props.initialYPos;

  var paddleElement = paddleRef.value;
  paddleElement!.style.left = paddle.value.posY + "%";

  console.log("paddleElement", paddleElement);
  console.log("posY", paddle.value.posY);

  console.log("paddle.value", paddle.value);
}

function gameLoop() {
  if (pressState.value.up && canMove.value.canMoveUp) {
    paddle.value.posX -= 1;
    console.log("paddle.value.posX", paddle.value.posX);
  }

  if (pressState.value.down && canMove.value.canMoveDown) {
    paddle.value.posX += 1;
    console.log("paddle.value.posX", paddle.value.posX);
  }
}

onMounted(() => {
  // Add keydown event listener
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      pressState.value.up = true;
    }
    if (e.key === "ArrowDown") {
      pressState.value.down = true;
    }
  });

  window.addEventListener("keyup", (e) => {
    console.log("keyup", e.key);
    if (e.key === "ArrowUp") {
      pressState.value.up = false;
    }
    if (e.key === "ArrowDown") {
      pressState.value.down = false;
    }
  });

  initialize();
  executeGameLoop(gameLoop);
});
</script>

<template>
  <div id="paddle" ref="paddleRef" :style="{ top: paddle.posX + '%' }"></div>
</template>

<style scoped>
#paddle {
  background-color: orange;
  position: absolute;
  top: 30%;
  width: 15px;
  height: 150px;
}
</style>
