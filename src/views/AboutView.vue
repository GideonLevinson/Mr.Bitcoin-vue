<template>
  <div class="about">
    <h1>Mr. Bitcoin: Your ultimate Bitcoin companion.
      Stay updated on Bitcoin's price, trends, and market insights.
      Track your investments, access real-time data, and connect with the Bitcoin community.
      Empower your crypto journey with Mr. Bitcoin today.</h1>
    <nav>
      <RouterLink to="/about/team">Team</RouterLink> |
      <RouterLink to="/about/goals">Goals</RouterLink>
    </nav>
    <RouterView />
    <img src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="bitcoin">
  </div>
</template>

<style lang="scss">
.about {
  margin-top: 3rem;
  text-align: center;

  h1 {
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  nav {
    margin: 2rem 0;
    text-align: center;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
}
</style>
