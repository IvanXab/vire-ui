<template>
  <button
      class="button"
      v-bind="$attrs"
      v-on="$attrs"
      :class="[radiusStyle, disabledStyle, sizeStyle, colorThemeStyle]"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue"
import {TColorTheme, TRadius, TSize} from "./Button.types";

const props = defineProps({
  size: {
    type: String as PropType<TSize>,
    required: false,
    default: "small"
  },
  radius: {
    type: String as PropType<TRadius>,
    required: false,
    default: 'small'
  },
  colorTheme: {
    type: String as PropType<TColorTheme>,
    required: false,
    default: "default"
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const colorThemeStyle = computed<string>(() => `color-theme-${props.colorTheme}`)
const disabledStyle = computed<string | null>(() => props.disabled ? 'disabled' : null)
const radiusStyle = computed<string>(() => `radius-${props.radius}`)
const sizeStyle = computed<string>(() => `size-${props.size}`)
</script>

<style scoped lang="sass">
@import "Button.vars"

.button
  font-family: 'Roboto', sans-serif
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