<script setup lang="ts">
import { DebugInfomation, GameLoop } from "@/core/gameloop";
import { KeyPressState } from "@/core/keyinput";
import { ref, onMounted, computed, defineProps } from "vue";

const ballState = ref({
  posX: 21.1,
  posY: 40,
  speedX: 1,
  speedY: 0.2,
});

const ballSize = {
  width: 20,
  height: 20,
};

const initialLimitation = {
  speedXMin: -10,
  speedXMax: 10,
  speedYMin: -10,
  speedYMax: 10,
};

const ballRef = ref<HTMLImageElement>();

function draw(debugInfo: DebugInfomation, pressState: KeyPressState): void {
  // ボールの移動処理
  ballState.value.posX += ballState.value.speedX;
  ballState.value.posY += ballState.value.speedY;

  // ボールの壁当たり判定
  if (ballState.value.posX < 0 || ballState.value.posX > 100) {
    ballState.value.speedX *= -1;
  }

  if (ballState.value.posY < 0 || ballState.value.posY > 100) {
    ballState.value.speedY *= -1;
  }

  // ボールの描画
  ballRef.value!.style.top = `${ballState.value.posX}%`;
  ballRef.value!.style.left = `${ballState.value.posY}%`;
}

onMounted(() => {
  ballRef.value!.style.width = `${ballSize.width}px`;
  ballRef.value!.style.height = `${ballSize.height}px`;
});

// ボール移動処理はこっちに書く
const loop = GameLoop.instance;
loop.executeGameLoop(draw);
</script>

<template>
  <p
    ref="ballRef"
    class="ball"
    :style="{ top: ballState.posX + '%', left: ballState.posY + '%' }"
  ></p>
</template>

<style scoped>
.ball {
  position: absolute;
  background-color: red;
  border-radius: 50%;
}
</style>
