<template>
  <input
      :value="modelValue"
      v-bind="$attrs"
      v-on="$attrs"
      type="text"
      @input="onUpdateInputValue($event.target as HTMLInputElement)"
  />
</template>

<script lang="ts" setup>


const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const onUpdateInputValue = (event: HTMLInputElement): void => {
  emit('update:modelValue', event.value)
}
</script>
