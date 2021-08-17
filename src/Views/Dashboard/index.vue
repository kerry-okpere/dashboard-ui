<template>
  <div class="relative">
    <Menu class="hidden md:block w-1/5 fixed h-screen"/>
    <div class="flex justify-end">
      <Payments class="w-full md:w-4/5"/>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Payments from './Payments.vue'
import Menu from '@/components/Menu/index.vue'
import useData from '@/utils/useData.js'

export default defineComponent({
  components: {
    Menu,
    Payments
  },
  setup() {
    const search = ref('')
    const { data } = useData()
    return {
      search,
      data
    }
  },
})
</script>
