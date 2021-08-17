<template>
  <router-link :to="to" class="text-primary text-sm">{{title}}</router-link>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      required: true
    },
  },
  setup() {
    
  },
})
</script>
