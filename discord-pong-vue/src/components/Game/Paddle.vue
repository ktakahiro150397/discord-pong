<script setup lang="ts">
import { DebugInfomation, GameLoop } from "@/core/gameloop";
import { KeyPressState } from "@/core/keyinput";
import { ref, onMounted, computed, defineProps } from "vue";

const props = defineProps<{
  initialYPos: number;
}>();

const paddle = ref({
  posX: 40,
  posY: 0,
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

function gameLoop(debugInfo: DebugInfomation, pressState: KeyPressState) {
  if (pressState.up && canMove.value.canMoveUp) {
    paddle.value.posX -= 1;
    console.log("paddle.value.posX", paddle.value.posX);
  }

  if (pressState.down && canMove.value.canMoveDown) {
    paddle.value.posX += 1;
    console.log("paddle.value.posX", paddle.value.posX);
  }
}

onMounted(() => {
  initialize();

  const loop = GameLoop.instance;
  loop.executeGameLoop(gameLoop);
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
