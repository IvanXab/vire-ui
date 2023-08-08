<template>
  <input
      class="input"
      v-bind="$attrs"
      v-on="$attrs"
      :value="modelValue"
      :class="sizeStyle"
      @input="onUpdateInputValue($event.target as HTMLInputElement)"
  />
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue"
import { Size } from "@/shared/types/Size";


const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: 'small'
  }
})

const emit = defineEmits(['update:modelValue'])

const sizeStyle = computed<string>(() => `size-${props.size}`)

const onUpdateInputValue = (event: HTMLInputElement): void => {
  emit('update:modelValue', event.value)
}
</script>

<style lang="sass" scoped>
.input
  max-width: 300px
  width: 100%
  font-family: 'Roboto', sans-serif
  border: 1px solid rgba(141, 153, 174, 0.4)
  border-radius: 10px

  &:focus-visible
    outline: none

.size
  &-small
    padding: 10px 10px
  &-medium
    padding: 15px 10px
  &-large
    padding: 20px 10px
</style>
