<template>
  <div class="rounded bg-green-60 text-green-70 py-px px-2 inline-flex items-center text-xs font-medium">
    {{title}}
    <CheckIcon class="h-4 w-4 ml-1" />
  </div>
  
</template>
<script>
import { defineComponent } from 'vue'
import { CheckIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    title: {
      type: String,
      required: true
    },
  },
  setup() {
    
  },
  emits: ['update:modelValue']
})
</script>
