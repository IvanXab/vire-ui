<template>
  <div class="center">
    <div style="display: flex; gap: 20px; padding: 30px; align-items: center">
      <Input v-model="data" :size="'small'" placeholder="Почта" />
      <Button :size="'small'" :color-theme="'success'">
        Отправить
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../components/input/Input.vue"
import Button from "../components/button/Button.vue"
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
