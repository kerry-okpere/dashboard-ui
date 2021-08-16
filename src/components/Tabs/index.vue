<template>
  <div>
    <ul class="flex space-x-4 border-b">
      <li v-for="(tab, index) in tabs" :key="index" @click="selectedIndex = tab.props.index"
        :class="['py-2 cursor-pointer', {'border-b-2 border-primary text-primary': selectedIndex == tab.props.index }]">
        {{ tab.props.title }} 
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, provide } from 'vue'

export default defineComponent({
  props: {

  },
  setup(props, {slots}) {
    const tabs = slots.default()
    const selectedIndex = ref(tabs[0].props.index)

    provide('selectedIndex', selectedIndex)
    return {
      tabs,
      selectedIndex,
    }
  },
})
</script>
