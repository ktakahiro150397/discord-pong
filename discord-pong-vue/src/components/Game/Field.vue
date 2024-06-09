<script setup lang="ts">
import { onMounted } from "vue";
// defineProps<{ width: number; height: number }>();

function onResize() {
  var width = window.innerWidth;
  var height = width * (9 / 16);

  if (height > window.innerHeight) {
    height = window.innerHeight;
    width = height * (16 / 9);
  }

  var appDiv = document.getElementById("field");
  appDiv!.style.width = `${width}px`;
  appDiv!.style.height = `${height}px`;
}

onMounted(() => {
  // Add resize event listener
  window.addEventListener("resize", onResize);

  // Set initial size
  onResize();
});
</script>

<style scoped>
#field {
  background-color: black;
}
</style>

<template>
  <div id="field"></div>
</template>
