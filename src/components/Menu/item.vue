<template>
  <div class="text-sm py-1">
    <router-link :to="route" @click="open = !open"
      :class="[' flex items-center', 
        $route.path == route ? 'text-secondary font-semibold' : 'text-gray-700']">
      <span class="mr-5.5">
        <slot/>
      </span>
      {{title}} 
    </router-link>
    <ul v-if="open && links?.length" class="pt-1 pb-3">
      <li v-for="(link, index) in links" :key="index" class="ml-10 py-0.5 font-normal text-gray-700 cursor-pointer">{{link}}</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    route: {
      type: String,
      default: '/'
    },
    links: {
      type: Array,
    }
  },
  setup() {
    const open = ref(true)
    return {
      open
    }
  },
})
</script>
