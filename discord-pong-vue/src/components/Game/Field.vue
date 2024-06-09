<script setup lang="ts">
import { onMounted, ref } from "vue";
import Paddle from "./Paddle.vue";
import { DebugInfomation, executeGameLoop } from "@/core/gameloop";

const componentDebugInfo = ref(new DebugInfomation());

function draw(debugInfo: DebugInfomation): void {
  componentDebugInfo.value.elapsedFrame = debugInfo.elapsedFrame;
  componentDebugInfo.value.elapsedTime = debugInfo.elapsedTime;
}

function onResize() {
  var width = window.innerWidth;
  var height = width * (9 / 16);

  var appDiv = document.getElementById("field");

  // Set the actual size of the game
  const screenSize = setBackGround(appDiv!, width, height);

  // Draw lines
  drawLines(appDiv!, screenSize.actualWidth, screenSize.actualHeight);
}

function setBackGround(
  appDiv: HTMLElement,
  width: number,
  height: number
): { actualWidth: number; actualHeight: number } {
  if (height > window.innerHeight) {
    height = window.innerHeight;
    width = height * (16 / 9);
  }

  appDiv!.style.width = `${width}px`;
  appDiv!.style.height = `${height}px`;

  return { actualWidth: width, actualHeight: height };
}

function drawLines(
  appDiv: HTMLElement,
  actualWidth: number,
  actualHeight: number
) {
  // Draw center line
}

onMounted(() => {
  // Add resize event listener
  window.addEventListener("resize", onResize);

  // Set initial size
  onResize();

  executeGameLoop(draw);
});
</script>

<style scoped>
#field {
  background-color: black;
  position: relative;
}

#field .center-line {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 5px;
  height: 100%;
  background-color: white;
}

#field .up-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: red;
}

#field .down-line {
  position: absolute;
  bottom: 0.1%; /* もうすこし賢い指定があると思う */
  left: 0;
  width: 100%;
  height: 5px;
  background-color: blue;
}
</style>

<template>
  <div id="field">
    <p style="color: white">
      Elapsed Frame : {{ componentDebugInfo.elapsedFrame }} | Elapsed
      Time(Frame) : {{ (componentDebugInfo.elapsedFrame / 60).toFixed(2) }} |
      Elapsed Time(s) :
      {{ (componentDebugInfo.elapsedTime / 1000).toFixed(2) }}
    </p>
    <div class="center-line"></div>
    <div class="up-line"></div>
    <div class="down-line"></div>

    <Paddle :initial-y-pos="10" />
    <Paddle :initial-y-pos="90" />
  </div>
</template>
