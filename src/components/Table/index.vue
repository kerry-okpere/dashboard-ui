<template>
  <table class="table-auto w-full border-collapse">
    <thead>
      <tr class="uppercase text-xxs border-b">
        <th class="py-3"><Checkbox v-model="selectAll"/></th>
        <th class="font-medium">amount</th>
        <th/>
        <th class="font-medium text-left pl-2">Description</th>
        <th class="font-medium">CUSTOMER</th>
        <th class="font-medium">DATE</th>
        <th/>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in dataTable" :key="index" class="border-b text-gray-700">
        <td class="py-3"><Checkbox v-model="data.selected"/></td>
        <td class="text-sm text-gray-900">{{currency}}{{data.amount}}</td>
        <td class="text-center"><Badge :title="data.status"/> </td>
        <td class="text-xsm text-gray-500 font-normal text-left w-2/5">{{data.desc}}</td>
        <td class="text-sm font-normal w-44">
          <div class="truncate w-40">{{data.customer}}lorehdjsjksksksjsjsjsj</div>
        </td>
        <td class="text-sm font-normal">{{data.date}}</td>
        <td><DotsHorizontalIcon class="h-4 w-4"/></td>
      </tr>
    </tbody>
  </table>
  <footer>
    <div class="py-6 flex items-center justify-between w-full">
      <p class="text-gray-700 text-sm"><span class="font-medium">{{dataTable.length}}</span> results</p>
      <div class="flex items-center space-x-2">
        <Button type="outline" is-small :disabled="currentPage === 0">
          Previous
        </Button>
        <Button type="outline" is-small :disabled="pages < max">
          Next
        </Button>
      </div>
    </div>
  </footer>
</template>
<script>
import { defineComponent, watch, ref } from 'vue'
import Checkbox from '@/components/Checkbox/index.vue'
import Badge from '@/components/Badge/index.vue'
import Button from '@/components/Button/index.vue'
import { DotsHorizontalIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    Checkbox,
    Badge,
    Button,
    DotsHorizontalIcon
  },
  props: {
    dataTable: {
      type: Array,
      required: false
    },
  },
  setup(props) {
    const currency = 'US$'
    const selectAll = false
    const max = 16
    const currentPage = ref(0)
    const pages = props.dataTable.length/2
    // pages should be greater than 16
    
    // watch(() => {
    //   // if selectAll is true update all data selected = true 
    // })
    return {
      currency,
      selectAll,
      max,
      currentPage,
      pages
    }
  },
})
</script>
