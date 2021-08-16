<template>
  <section v-show='isActive'>
    <slot></slot>
  </section>
</template>
<script>
import { defineComponent, ref, inject, computed } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Tab',
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const selectedIndex = inject('selectedIndex')
    const isActive = computed(() => props.index == selectedIndex.value)
    
    return {
      isActive
    }
  },
})
</script>
