<template>
  <button :class="[
    'rounded-md', 
    isSmall ? 'py-1 px-3 text-sm' : 'py-3 px-4',
    type == 'solid' ? 'bg-primary text-white' : 'bg-white shadow-primary',
    ]">
    <slot />
  </button>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isSmall: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'solid',
      validator(value) {
        return ['solid', 'outline'].includes(value)
      }
    }
  },
  setup() {
    
  },
})
</script>
