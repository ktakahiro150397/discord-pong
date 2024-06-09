<script setup lang="ts">
import { ref, onMounted } from "vue";

defineProps<{
  playerNumber: string;
}>();

const emit = defineEmits<{
  (e: "PlayerJoined"): void;
}>();

const joinPlayerName = ref("aaa");
const isPlayerJoined = ref(false);

function joinPlayer() {
  joinPlayerName.value = "Joined!";
  isPlayerJoined.value = true;
  emit("PlayerJoined");
}
</script>

<template>
  <div>
    <button @click="joinPlayer">
      <p v-if="isPlayerJoined">
        プレイヤー{{ joinPlayerName }} が参加しました！
      </p>
      <p v-else>参加受付中...</p>
    </button>
  </div>
</template>
