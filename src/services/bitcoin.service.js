import axios from "axios"
import { utilService } from "../services/util.service.js"

const CACHE_LIFETIME = 1000 * 60 * 60 * 24 // 24 hours
const BITCOIN_KEY = "BITCOIN_DB"

let gBitcoinData = utilService.loadFromStorage(BITCOIN_KEY) || {}

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate() {
  const bitcoinRate = gBitcoinData.bitcoinRate
  const lastRequest = gBitcoinData?.bitcoinRate?.reqTimeStamp
  if (bitcoinRate && Date.now() - lastRequest < CACHE_LIFETIME) {
    return bitcoinRate.data
  } else {
    try {
      const response = await axios.get(
        "https://blockchain.info/tobtc?currency=USD&value=1"
      )
      gBitcoinData.bitcoinRate = {
        data: response.data,
        reqTimeStamp: Date.now(),
      }

      utilService.saveToStorage(BITCOIN_KEY, gBitcoinData)
      return response.data
    } catch (error) {
      console.error("Error fetching Bitcoin value:", error)
      throw error
    }
  }
}

async function getMarketPriceHistory() {
  const priceHistory = gBitcoinData.priceHistory
  const lastRequest = gBitcoinData?.priceHistory?.reqTimeStamp

  if (priceHistory && Date.now() - lastRequest < CACHE_LIFETIME) {
    return priceHistory.data
  } else {
    try {
      const response = await axios.get(
        "https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true"
      )
      console.log("response:", response)

      gBitcoinData.priceHistory = {
        data: response.data,
        reqTimeStamp: Date.now(),
      }

      utilService.saveToStorage(BITCOIN_KEY, gBitcoinData)
      return response.data
    } catch (error) {
      console.error("Error fetching market price history:", error)
      throw error
    }
  }
}

async function getAvgBlockSize() {
  const avgBlockSize = gBitcoinData.avgBlockSize
  const lastRequest = gBitcoinData?.avgBlockSize?.reqTimeStamp

  if (avgBlockSize && Date.now() - lastRequest < CACHE_LIFETIME) {
    return avgBlockSize.data
  } else {
    try {
      const response = await axios.get(
        "https://api.blockchain.info/charts/avg-block-size?timespan=12months&format=json&cors=true"
      )
      gBitcoinData.avgBlockSize = {
        data: response.data,
        reqTimeStamp: Date.now(),
      }
      utilService.saveToStorage(BITCOIN_KEY, gBitcoinData)
      return response.data
    } catch (error) {
      console.error("Error fetching average block size:", error)
      throw error
    }
  }
}
