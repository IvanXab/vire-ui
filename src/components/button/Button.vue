<template>
  <button
      class="button"
      v-bind="$attrs"
      v-on="$attrs"
      :class="[
          radiusClass,
          disabledClass,
          sizeClass,
          colorThemeClass
      ]"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue"
import { Size } from "@/shared/types/Size"
import { Radius } from "@/shared/types/Radius"
import { ColorTheme } from "@/shared/types/ColorTheme"

const props = defineProps({
  size: {
    type: String as PropType<Size>,
    required: false,
    default: "small"
  },
  radius: {
    type: String as PropType<Radius>,
    required: false,
    default: 'small'
  },
  colorTheme: {
    type: String as PropType<ColorTheme>,
    required: false,
    default: "default"
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const colorThemeClass = computed<string>(
    () => `color-theme-${props.colorTheme}`
)
const disabledClass = computed<string | null>(
    () => props.disabled ? 'disabled' : null
)
const radiusClass = computed<string>(
    () => `radius-${props.radius}`
)
const sizeClass = computed<string>(
    () => `size-${props.size}`
)
</script>

<style lang="sass" scoped>
.button
  font-family: 'Roboto', sans-serif
  font-size: 13.5px
  text-align: center
  border: none
  cursor: pointer
  color: #ffffff

  &:active
    -webkit-transform: 0.3s ease-in-out
    transform: scale(0.95)

.size
  &-small
    padding: 10px
  &-medium
    padding: 15px
  &-large
    padding: 20px
    font-size: 17px

.radius
  &-none
    border-radius: 0
  &-small
    border-radius: 5px
  &-medium
    border-radius: 10px
  &-full
    border-radius: 15px

.color-theme
  &-default
    background: $default-color
  &-primary
    background: $primary-color
  &-secondary
    background: $secondary-color
  &-tertiary
    background: $tertiary-color
  &-success
    background: $success-color
  &-danger
    background: $danger-color
  &-warning
    background: $warning-color

.disabled
  background: $disabled-color
  cursor: default

  &:active
    transform: none
</style>