<template>
    <div class="chart-container main-layout">
      <h1>Bitcoin Stats</h1>
      <div v-if="priceHistory && avgBlockSize">
        <BarChart :chartData="priceHistoryData" />
        <BarChart :chartData="avgBlockSizeData" />
      </div>
    </div>
  </template>
  
  <script>
import { bitcoinService } from '@/services/bitcoin.service.js'
  import BarChart from "@/cmps/charts/BarChart.vue"
  
  export default {
    data() {
      return {
        priceHistory: null,
        avgBlockSize: null,
      };
    },
    async created() {
      this.priceHistory = await bitcoinService.getMarketPriceHistory()
      this.avgBlockSize = await bitcoinService.getAvgBlockSize()
    },
    components: { BarChart },
  
    computed: {
      priceHistoryData() {
        return {
          labels: this.priceHistory.values.map((dataSample) => {
            let date = dataSample.x
            date = new Date(date * 1000)
            return `${date.getDate() + 1}.${date.getMonth() + 1}`
          }),
          datasets: [
            {
              label: "Average USD market price across major bitcoin exchanges.",
              backgroundColor: "#01BD7E",
              data: this.priceHistory.values.map((dataSample) => dataSample.y),
            },
          ],
        };
      },
      avgBlockSizeData() {
        return {
          labels: this.avgBlockSize.values.map((dataSample) => {
            let date = dataSample.x
            date = new Date(date * 1000)
            return date.toISOString().split("T")[0]
          }),
          datasets: [
            {
              label: "The average block size in MB.",
              backgroundColor: "#01BD7E",
              data: this.avgBlockSize.values.map((dataSample) => dataSample.y),
            },
          ],
        };
      },
    },
  }
  </script>
  
  <style lang="scss" scoped></style>
  