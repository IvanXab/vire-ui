<template>
  <button
      class="button"
      :class="[radiusStyle, disabledStyle, sizeStyle]"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue"
import { TRadius, TSize } from "./Button.types";

const props = defineProps({
  radius: {
    type: Object as PropType<TRadius>,
    required: false,
    default: 'small'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  size: {
    type: Object as PropType<TSize>,
    required: false,
    default: "medium"
  }
})

const disabledStyle = ref<string>(props.disabled ? 'disabled' : null)
const radiusStyle = ref<string>(`radius-${props.radius}`)
const sizeStyle = ref<string>(`size-${props.size}`)
</script>

<style scoped lang="sass">
.button
  background: #3a86ff
  color: white
  font-family: 'Roboto', sans-serif
  text-align: center
  border: none
  cursor: pointer

  &:active
    -webkit-transform: 0.3s ease-in-out
    opacity: 0.9
    transform: scale(0.95)

.disabled
  background: #8d99ae
  cursor: default

  &:active
    opacity: 1
    transform: none

.size
  &-small
    padding: 10px

  &-medium
    padding: 15px

  &-large
    font-size: 17px
    padding: 20px

.radius
  border-radius: 5px

  &-none
    border-radius: 0

  &-small
    border-radius: 5px

  &-medium
    border-radius: 10px

  &-full
    border-radius: 15px
</style>