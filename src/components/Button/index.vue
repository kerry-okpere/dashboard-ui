<template>
  <button :class="[
    'rounded-md flex items-center justify-center', 
    isSmall ? 'py-1 px-3 text-sm' : 'py-3 px-4',
    type == 'solid' ? `bg-${variant}` : 'bg-white shadow-primary' ,
    {'cursor-not-allowed': disabled},
    disabledStyles
  ]">
    <slot>
      Button
    </slot>
  </button>
</template>
<script>
import { computed, defineComponent } from 'vue'

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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },
  setup(props) {
    const disabledStyles = computed(() => {
      if(props.type ==  'outline'){
        return props.disabled ? 'text-gray-400' : 'text-gray-700'
      }else {
        return props.disabled ? '' : 'text-white'
      }
    })
    return {
      disabledStyles
    }
  },
})
</script>
