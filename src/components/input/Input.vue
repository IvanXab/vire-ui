<template>
  <div class="input-wrapper"
     :class="[
        colorThemeClass,
        radiusClass,
        sizeClass,
        requiredClass
     ]"
  >
    <p v-if="title && !required" class="title">
      {{ title }}
    </p>
    <p v-else-if="title && required" class="title">
      {{ title }} <span style="color: #c81d25">*</span>
    </p>
    <input
        class="input"
        v-bind="$attrs"
        v-on="$attrs"
        :value="modelValue"
        @input="onUpdateInputValue($event.target as HTMLInputElement)"
    />
  </div>
  <div v-if="!validation" class="validation-message">
    {{ validationMessage }}
  </div>
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
  },
  title: {
    type: String,
    required: false
  },
  validation: {
    type: Boolean,
    required: false,
    default: true
  },
  validationMessage: {
    type: String,
    required: false,
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
  font-size: 13px

  &-wrapper
    display: flex
    flex-direction: column
    gap: 6px
    max-width: 300px
    width: 100%
    font-family: 'Roboto', sans-serif
    border: 1px solid rgba(141, 153, 174, 0.4)

  &:focus-visible
    outline: none

.title
  color: #575a62
  font-size: 12px

.required
  border: 2px solid $danger-color

.validation-message
  padding: 3px 10px
  font-family: 'Roboto', sans-serif
  font-size: 10px
  color: $danger-color

.radius
  &-none
    border-radius: 0
  &-small
    border-radius: 5px
  &-medium
    border-radius: 10px
  &-full
    border-radius: 15px

.size
  &-small
    padding: 6px 10px
  &-medium
    padding: 15px 10px
  &-large
    padding: 20px 10px

.color-theme
  &-default
    background: $default-color
    .input
      background: $default-color

  &-primary
    background: $primary-color
    .input
      background: $primary-color

  &-secondary
    background: $secondary-color
    .input
      background: $secondary-color

  &-tertiary
    background: $tertiary-color
    .input
      background: $tertiary-color

  &-success
    background: $success-color
    .input
      background: $success-color

  &-danger
    background: $danger-color
    .input
      background: $default-color

  &-warning
    background: $warning-color
    .input
      background: $warning-color
</style>
