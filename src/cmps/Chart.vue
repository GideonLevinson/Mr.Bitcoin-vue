<template>
  <h2>Bitcoin statistics:</h2>
  <!-- <BarChart /> -->
  <pre>{{ priceHistory }}</pre>
</template>

<script>
// import { Bar } from 'vue-chartjs'
import {bitcoinService} from '@/services/bitcoin.service.js'
export default {
    data() {
        return {
            priceHistory: null,

        }
    },
    // components: { BarChart },
  async created() {
    this.priceHistory = await bitcoinService.getMarketPriceHistory()
  }
}
</script>

<style lang="scss">
  
</style>