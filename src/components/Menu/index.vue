<template>
  <section class="bg-gray-40 border-r py-4 px-5">
    <div class="flex space-x-3 items-center">
      <div class="p-1.5 rounded-full shadow-tertiary bg-white inline-block"><Shop /></div>
      <p class="text-gray-900">Store name</p><Chevron />
    </div>

    <nav class="py-6">
      <Group>
        <Item title="Home" route="/">
          <Home :is-active="$route.path === '/'" />
        </Item>
      </Group>

      <Group>
        <Item title="Payments" route="/payments" 
          :links="['Reviews', 'Disputes', 'Top-ups', 'Collected fees', 'Transfers', 'Payouts', 'All transactions']">
          <Payment :is-active="$route.path === '/payments'"/>
        </Item>
        <Item title="Balances" route="/balances"><Balances :is-active="$route.path === '/balances'"/></Item>
        <Item title="Customers" route="/customers"><Customer :is-active="$route.path === '/customers'"/></Item>
        <Item title="Connected accounts" route="/accounts"><Accounts :is-active="$route.path === '/accounts'"/></Item>
        <Item title="Products" route="/products"><Product :is-active="$route.path === '/products'"/></Item>
        <Item title="Reports" route="/reports"><Reports :is-active="$route.path === '/reports'"/></Item>
      </Group>

      <Group>
        <Item title="Developers" route="/developers"><Payment :is-active="$route.path === '/developers'"/></Item>
        <div class="py-1">
          <Switch v-model="on" title="View test data" />
        </div>
        <Item title="Settings" route="/settings"><Settings :is-active="$route.path === '/settings'"/></Item>
      </Group>
    </nav>
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Group from './group.vue'
import Item from './item.vue'
import Switch from '@/components/Switch/index.vue'
import Home from '@/components/Icon/Home.vue'
import Payment from '@/components/Icon/Payment.vue'
import Shop from '@/components/Icon/Shop.vue'
import Balances from '@/components/Icon/Balances.vue'
import Customer from '@/components/Icon/Customer.vue'
import Accounts from '@/components/Icon/Accounts.vue'
import Reports from '@/components/Icon/Reports.vue'
import Settings from '@/components/Icon/Settings.vue'
import Product from '@/components/Icon/Product.vue'
import Chevron from '@/components/Icon/Chevron.vue'

export default defineComponent({
  components: {
    Group,
    Item,
    Switch,
    Home,
    Payment,
    Shop,
    Balances,
    Customer,
    Accounts,
    Reports,
    Settings,
    Product,
    Chevron
  },
  setup() {
    const on = ref(false)
    return {
      on
    }

  },
})
</script>
