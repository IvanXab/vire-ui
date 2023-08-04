<template>
  <h2>Sizes</h2>

  <div class="button-stand">
    <Button :size="'small'">
      Small
    </Button>
    <Button :size="'medium'">
      Medium
    </Button>
    <Button :size="'large'">
      Large
    </Button>
  </div>

  <h2>Radius</h2>

  <div class="button-stand">
    <Button :radius="'none'">
      None
    </Button>
    <Button :radius="'small'">
      Small
    </Button>
    <Button :radius="'medium'">
      Medium
    </Button>
    <Button :radius="'full'">
      Full
    </Button>
  </div>

  <h2>Colors</h2>

  <div class="button-stand">
    <Button :color-theme="'default'">
      Default
    </Button>
    <Button :color-theme="'primary'">
      Primary
    </Button>
    <Button :color-theme="'secondary'">
      Secondary
    </Button>
    <Button :color-theme="'tertiary'">
      Tertiary
    </Button>
    <Button :color-theme="'success'">
      Success
    </Button>
    <Button :color-theme="'danger'">
      Danger
    </Button>
    <Button :color-theme="'warning'">
      Warning
    </Button>
  </div>
</template>

<style lang="sass" scoped>
.button-stand
  display: flex
  align-items: center
  gap: 30px

h2
  margin: 0
  font-family: 'Roboto', sans-serif
  color: #252525
</style>

<script setup lang="ts">
import Button from "../components/button/Button.vue";
</script>