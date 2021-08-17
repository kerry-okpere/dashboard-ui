<template>
  <section class="h-screen flex items-center justify-center">
    <div>
      <img src="../../assets/img/vector.svg" alt="logo" class="pb-12 "/>

      <form @submit.prevent="handleSubmit"  class="shadow-secondary py-12 px-16 rounded">
        <div class="w-96">
          <h1 class="text-gray-800 text-2xl font-semibold py-4">Sign in to your account</h1>
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

      <p class="text-sm text-gray-700 py-4">Don’t have an account? <Link title="Sign up" /></p>
      <ul class="list-disc flex w-full space-x-7 text-sm text-gray-600 py-2">
        <li class="list-none">© Stripe</li>
        <li>Contact</li>
        <li>Privacy &amp; terms</li>
      </ul>
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
