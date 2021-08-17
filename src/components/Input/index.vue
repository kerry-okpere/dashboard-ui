<template>
  <label class="input_group">
    <div class="input_label">
      <span v-if="label" class="input_label-main">{{label}}</span>
      <Link v-if="altLabel" :title="altLabel" class="input_label-alt" />
    </div>
    <div class="input_input">
      <input class="h-full" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" :type="inputType"/>
      <span v-if="$attrs.type === 'password'">
        <EyeIcon class="input_icon" v-if="viewPassword == true" @click="showPassword(false)"/>
        <EyeOffIcon class="input_icon" v-else @click="showPassword(true)"/>
      </span>
    </div>
  </label>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import Link from '@/components/Link/index.vue'
import { EyeIcon, EyeOffIcon } from '@heroicons/vue/solid';


export default defineComponent({
  components: {
    Link,
    EyeIcon,
    EyeOffIcon
  },
  props: {
    modelValue: {
      type: null,
      required: true
    },
    label: {
      type: String
    },
    altLabel: {
      type: String
    },
  },
  inheritAttrs: false,
  setup(props, { attrs }) {
    const viewPassword = ref(false)
    const derivedType = ref('password')
    const inputType = computed(() => attrs.type === 'password' ? derivedType.value : attrs.type)

    const showPassword = (show) => {
      viewPassword.value = show
      derivedType.value = viewPassword.value ? 'text' : 'password'
    }

    return {
      viewPassword,
      inputType,
      showPassword
    }
  },
  emits: ['update:modelValue']
})
</script>
<style lang="scss" scoped>
@import './_index';
</style>
