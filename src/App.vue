<template>
  <div class="center">
    <Button :size="'small'" :radius="'medium'">
      Button
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./components/button/Button.vue"
</script>

<style lang="sass" scoped>
.center
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
</style>
