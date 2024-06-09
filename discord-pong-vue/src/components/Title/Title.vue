<script setup lang="ts">
import { ref } from "vue";
import JoinPlayerButton from "./JoinPlayerButton.vue";
import GameScreen from "../Game/GameScreen.vue";

class PlayerModel {
  constructor(player1: PlayerInfo, player2: PlayerInfo) {}
}

class PlayerInfo {
  constructor(public name: string, public playerNumber: number) {}

  get info(): string {
    return `Player ${this.playerNumber}: ${this.name}`;
  }
}

const varTestNumber: string = "4";

const joinMessage = ref("");

function onPlayerJoined() {
  joinMessage.value += "aaa";
}
</script>

<template>
  <h1>Discord Pong</h1>
  <GameScreen />

  <!-- <JoinPlayerButton
    player-number="1"
    @PlayerJoined="onPlayerJoined"
  ></JoinPlayerButton>

  <JoinPlayerButton player-number="2" />
  <JoinPlayerButton :player-number="varTestNumber" />

  <p>{{ joinMessage }}</p> -->
</template>
