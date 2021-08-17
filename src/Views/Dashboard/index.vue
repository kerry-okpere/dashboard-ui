<template>
  <div>
    <nav>

    </nav>
    <section>
      <Header v-model="search"/>
      <div class="px-2 md:px-4 lg:px-10">
        <div class="flex flex-col md:flex-row items-center justify-between pt-6">
          <h1 class="text-2.5xl text-gray-900 font-bold">Payments</h1>
          <div class="flex space-x-2">
            <Button type="outline" is-small>
              <FilterIcon class="h-4 w-4 mr-2"/> Filter
            </Button>
            <Button type="outline" is-small>
              <ArrowRightIcon class="h-4 w-4 mr-2 transform -rotate-45"/> Export
            </Button>
            <Button type="solid" is-small variant="secondary">
              <PlusIcon class="h-4 w-4 mr-2"/> Create payment
            </Button>
          </div>
        </div>

        <Tabs class="py-4">
          <Tab title="All" :index="1">
            <p class="text-sm text-gray-500">All Table</p>
          </Tab>
          <Tab title="Succeeded" :index="2">
              <Table :data-table="data" />
          </Tab>
          <Tab title="Refunded" :index="3">
            <p class="text-sm text-gray-500">Refunded Table</p>
          </Tab>
          <Tab title="Uncaptured" :index="4">
            <p class="text-sm text-gray-500">Uncaptured Table</p>
          </Tab>
        </Tabs>
      </div>
    </section>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Tabs from '@/components/Tabs/index.vue'
import Tab from '@/components/Tabs/Tab/index.vue'
import Header from '@/components/Header/index.vue'
import Button from '@/components/Button/index.vue'
import Table from '@/components/Table/index.vue'
import { PlusIcon, FilterIcon, ArrowRightIcon } from '@heroicons/vue/solid';
import useData from '@/utils/useData.js'

export default defineComponent({
  components: {
    Tabs,
    Tab,
    Header,
    Button,
    PlusIcon, 
    FilterIcon, 
    ArrowRightIcon,
    Table
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
