<template>
  <Hero />
  <main class="home-page">
    <section class="market">
      <h3>Bitcoin rate: <span>$1 = ฿{{ bitcoinRate }}</span></h3>
    </section>
  </main>
</template>

<script>
import { bitcoinService } from '@/services/bitcoin.service.js'
import { userService } from '@/services/user.service.js'

import Hero from '../cmps/Hero.vue'

export default {
  data() {
    return {
      user: null,
      bitcoinRate: null,
    }
  },
  async created() {
    this.user = userService.getUser()
    this.bitcoinRate = await bitcoinService.getRate()
  },
  components: {
    Hero,
  }
}
</script>

<style lang="scss">
.home-page {
  .user-balance {
    margin-top: 1rem;
    
    h3 {
      margin-top: .8rem;
      span {
      font-size: 1em; 
      color: hsla(160, 100%, 37%, 1);
    }
    }
    
  }
  .market {
    margin-top: 2rem;
    font-size: 1.2rem;
    span {
      color: rgb(179, 159, 47);
    }
  }
}
</style>
