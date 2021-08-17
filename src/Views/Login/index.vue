<template>
  <section class="h-screen w-full bg relative">
    <div class="relative w-39/50 mx-auto sm:border-l sm:border-r h-screen">
      <div class="px-24 w-8/12 sm:w-530 mx-auto sm:border-l sm:border-r sm:border-dashed h-screen">
        <div class="fixed left-0 top-535">
          <img src="../../assets/img/line-2.svg" class="ml-6 -mb-18">
          <img src="../../assets/img/line-1.svg">
        </div>
        <img class="fixed right-0 top-64" src="../../assets/img/line-3.svg">
      </div>
    </div>
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="w-full px-6 sm:w-auto sm:px-0">
        <img src="../../assets/img/vector.svg" alt="logo" class="pl-4 pb-4 sm:pb-12"/>
        <form @submit.prevent="handleSubmit"  class="shadow-secondary bg-white p-6 sm:py-12 sm:px-18 rounded">
          <div class="sm:w-96">
            <h1 class="text-gray-700 text-2xl font-semibold py-4">Sign in to your account</h1>
            <div class="py-4">
              <Input v-model="user.name" label="Email" type="email"/>
            </div>
            <div class="py-4">
              <Input v-model="user.password" label="Password" type="password" alt-label="Forgot your password?"/>
            </div>
            
            <Checkbox class="py-4" v-model="user.agree">
              <p class="font-normal text-sm">Stay signed in for a week</p>
            </Checkbox>
            <Button class="my-4 w-full" @click="$router.push('/payments')">Continue</Button>
            <Link title="Use single sign-on (SSO) instead" class="block text-center py-4" />
          </div>
        </form>

        <p class="text-sm text-gray-700 pt-6 pb-2">Don’t have an account? <Link title="Sign up" /></p>
        <p class="text-sm text-gray-600 py-2 font-medium">
          <span> © Stripe</span>
          <span class="px-1">·</span>
          <span>Contact</span>
          <span class="px-1">·</span>
          <span>Privacy &amp; terms</span>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import Input from '@/components/Input/index.vue'
import Button from '@/components/Button/index.vue'
import Link from '@/components/Link/index.vue'
import Checkbox from '@/components/Checkbox/index.vue'

export default defineComponent({
  components: {
    Input,
    Button,
    Link,
    Checkbox
  },
  setup() {
    const state = reactive({
      user: {
        name: '',
        password: '',
        agree: true
      }
    })
    const handleSubmit = () => {

    }

    return {
      ...toRefs(state),
      handleSubmit
    }
  },
})
</script>
<style lang="scss" scoped>
.bg{
  background-image: url('../../assets/img/grey-bg.svg');
  background-repeat: no-repeat;
  background-position: top;
}
</style>