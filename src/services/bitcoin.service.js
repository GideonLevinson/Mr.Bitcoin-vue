import axios from 'axios'
export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
//   getAvgBlockSize,
}

let cachedData = 0.00003322

async function getRate() {
  try {
    if (cachedData) {
      return cachedData
    }

    const response = await axios.get("https://blockchain.info/tobtc", {
      params: {
        currency: "USD",
        value: 1,
      },
    });

    cachedData = response.data
    return cachedData
  } catch (error) {
    console.error("Error fetching Bitcoin value:", error)
    throw error
  }
}

// async function getRate() {
//   try {
//     const response = await axios.get("https://blockchain.info/tobtc", {
//       params: {
//         currency: "USD",
//         value: 1,
//       },
//     })
//     console.log(response.data)
//     return response.data
//   } catch (error) {
//     console.error("Error fetching Bitcoin value:", error)
//     throw error
//   }
// }

async function getMarketPriceHistory() {
  try {
    const response = await axios.get(
      "https://api.blockchain.info/charts/market-price",
      {
        params: {
          timespan: "5months",
          format: "json",
          cors: true,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error("Error fetching market price history:", error)
    throw error
  }
}

// async function getAvgBlockSize() {
//   try {
//     const response = await axios.get(
//       "https://api.blockchain.info/charts/avg-block-size",
//       {
//         params: {
//           timespan: "5months",
//           format: "json",
//           cors: true,
//         },
//       }
//     )
//     return response.data
//   } catch (error) {
//     console.error("Error fetching average block size:", error)
//     throw error
//   }
// }
