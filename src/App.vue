<script>
import AppHeader from '@/cmps/AppHeader.vue'
import UserMsg from '@/cmps/UserMsg.vue'
import AppFooter from '@/cmps/AppFooter.vue'

export default {
  components: {
    AppHeader,
    UserMsg,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader />
  <UserMsg />
  <main class="main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>

</style>
