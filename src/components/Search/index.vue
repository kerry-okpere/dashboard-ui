<template>
  <label class="flex text-gray-500 text-sm items-center">
    <SearchIcon class="h-4 w-4 mr-2"/>
    <input class="h-full outline-none w-full placeholder-gray-500 py-4" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="search" placeholder="Search..."/>
  </label>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/outline';

export default defineComponent({
  components: {
    SearchIcon
  },
  props: {
    modelValue: {
      type: null,
      required: true
    },
  },
  setup() {

  },
  emits: ['update:modelValue']
})
</script>

