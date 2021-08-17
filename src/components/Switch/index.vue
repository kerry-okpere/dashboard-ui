<template>
  <label class="switch">
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
    <span :class="['switch_button', {'switch_button-active': modelValue}]">
    </span>
    <span v-if="title" :class="[modelValue ? 'text-secondary font-semibold' : 'text-gray-700']">
      {{title}}
    </span>
  </label>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    modelValue: {
      type: Boolean,
      required: true
    },
  },
  setup() {
    
  },
  emits: ['update:modelValue']
})
</script>
<style lang="scss" scoped>
@import './_index';
</style>

