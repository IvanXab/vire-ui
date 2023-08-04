<template>
  <div class="center">
    <ButtonStand />
  </div>
</template>

<script setup lang="ts">
import ButtonStand from "./stands/ButtonStand.vue";
</script>

<style lang="sass" scoped>
.center
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 50px
  height: 100vh
</style>
