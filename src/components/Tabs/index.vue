<template>
  <div>
    <ul class="flex space-x-5 border-b">
      <li v-for="(tab, index) in tabs" :key="index" @click="selectedIndex = tab.props.index"
        :class="['py-2 cursor-pointer text-gray-600 text-sm', {'border-b-2 border-primary text-primary': selectedIndex == tab.props.index }]">
        {{ tab.props.title }} 
      </li>
    </ul>
    <div class="py-4">
      <slot />
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, provide } from 'vue'

export default defineComponent({
  props: {

  },
  setup(props, {slots}) {
    const tabs = slots.default()
    const selectedIndex = ref(tabs[1].props.index)

    provide('selectedIndex', selectedIndex)
    return {
      tabs,
      selectedIndex,
    }
  },
})
</script>
