<template>
  <div class="center">
    <Input v-model="data" :size="'small'" placeholder="Enter your name" />
  </div>
</template>

<script setup lang="ts">
import Input from "../components/input/Input.vue"
import { ref, watch } from "vue"

const data = ref('')

watch(data, () => console.log(data.value))
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
