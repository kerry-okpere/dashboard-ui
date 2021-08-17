import { reactive } from 'vue'

export  default () => {
  const state = reactive({
    data: [
      {
        id: '#1',
        amount: '352.22',
        selected: true,
        status: 'Succeeded',
        desc: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258',
        customer: 'hefovo87@ereyemindhdddjdjdjdnbhv.com',
        date: '7 Jul, 14:04'
      }
    ]
  })
  return {
    data: state.data
  }
}

