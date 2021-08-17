<template>
  <header class="flex justify-between items-center border-b px-8">
    <Search :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" class="w-3/5"/>
    <div class="flex">
      <BellIcon class="h-5 w-5 text-gray-400 mr-2 cursor-pointer"/>
      <QuestionMarkCircleIcon class="h-5 w-5 text-gray-400 mr-2 cursor-pointer"/>
      <UserIcon class="h-5 w-5 text-gray-400 mr-2 cursor-pointer"/>
    </div>
  </header>
</template>
<script>
import { defineComponent } from 'vue'
import Search from '@/components/Search/index.vue'
import { UserIcon, QuestionMarkCircleIcon, BellIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    Search,
    UserIcon,
    QuestionMarkCircleIcon, 
    BellIcon
  },
  props: {
    modelValue: {
      type: String,
      required: true
    },
  },
  setup() {
    
  },
  emits: ['update:modelValue']
})
</script>
