<script setup lang="ts">
// import { executeGameLoop } from "@/core/gameloop";
import { ref, onMounted, computed, defineProps } from "vue";

const ballState = ref({
  posX: 21.1,
  posY: 40,
  speedX: 0,
  speedY: 0,
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

onMounted(() => {
  ballRef.value!.style.width = `${ballSize.width}px`;
  ballRef.value!.style.height = `${ballSize.height}px`;
});

// ボール移動処理はこっちに書く
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
