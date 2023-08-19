<template>
  <input
      class="input"
      v-bind="$attrs"
      v-on="$attrs"
      :value="modelValue"
      :class="[
          colorThemeClass,
          radiusClass,
          sizeClass,
          requiredClass
      ]"
      @input="onUpdateInputValue($event.target as HTMLInputElement)"
  />
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue"
import { Size } from "@/shared/types/Size"
import {Radius} from "@/shared/types/Radius.ts";
import {ColorTheme} from "@/shared/types/ColorTheme.ts";

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: 'small'
  },
  radius: {
    type: String as PropType<Radius>,
    required: false,
    default: 'small'
  },
  colorTheme: {
    type: String as PropType<ColorTheme>,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

const requiredClass = computed<string | null>(
    () => props.required
        ? `required`
        : null
)
const sizeClass = computed<string>(
    () => `size-${props.size}`
)
const radiusClass = computed<string>(
    () => `radius-${props.radius}`
)
const colorThemeClass = computed<string>(
    () => `color-theme-${props.colorTheme}`
)

const onUpdateInputValue = (event: HTMLInputElement): void => {
  emit('update:modelValue', event.value)
}
</script>

<style lang="sass" scoped>
.input
  position: relative
  max-width: 300px
  width: 100%
  font-family: 'Roboto', sans-serif
  font-size: 14px
  border: 1px solid rgba(141, 153, 174, 0.4)

  &:focus-visible
    outline: none

.required
  border: 2px solid $danger-color

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

.size
  &-small
    padding: 10px 10px
  &-medium
    padding: 15px 10px
  &-large
    padding: 20px 10px
</style>
