<template>
  <div class="relative">
    <DotsHorizontalIcon class="h-4 w-4" @click="open = !open"/>
    <ul class="absolute shadow-secondary py-1.5 bg-white z-10 w-24 right-0 rounded-md" v-if="open">
      <li class="text-sm text-gray-600 py-1 px-2 hover:bg-gray-20 transition-colors cursor-pointer">Delete</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { DotsHorizontalIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    DotsHorizontalIcon
  },
  setup() {
    const open = ref(false)
    return {
      open
    }
  },
})
</script>
