<template>
  <Badge title="Succeeded"/>
  
  <Tabs>
    <Tab title="All" :index="1">
      <p class="text-sm text-gray-500">All</p>
    </Tab>
    <Tab title="Succeeded" :index="2">

    </Tab>
    <Tab title="Refunded" :index="3">
      <p class="text-sm text-gray-500">Refunded</p>
    </Tab>
    <Tab title="Uncaptured" :index="4">
      <p class="text-sm text-gray-500">Uncaptured</p>
    </Tab>
  </Tabs>
</template>
<script>
import { defineComponent } from 'vue'
import Badge from '@/components/Badge/index.vue'
import Tabs from '@/components/Tabs/index.vue'
import Tab from '@/components/Tabs/Tab/index.vue'


export default defineComponent({
  components: {
    Badge,
    Tabs,
    Tab
  },
  setup() {
    
  },
})
</script>
