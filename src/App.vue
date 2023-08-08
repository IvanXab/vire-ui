<template>
  <div class="center">
    <Input v-model="test" />
  </div>
</template>

<script setup lang="ts">

import Input from "./components/input/Input.vue";
import { ref, watch } from "vue";

const test = ref('')

watch(test, () => console.log(test.value))
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
