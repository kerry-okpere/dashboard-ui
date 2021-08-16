<template>
  <label class="flex items-center">
    <input class="hidden" type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)">
    <span :class="[ 'cursor-pointer rounded', modelValue ? `bg-primary`: 'shadow-primary p-2',]">
      <CheckIcon v-show="modelValue" class="h-4 w-4 text-white" />
    </span>
    <span class="pl-2">
      <slot />
    </span>
  </label>
</template>
<script>
import { defineComponent } from 'vue'
import { CheckIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
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

