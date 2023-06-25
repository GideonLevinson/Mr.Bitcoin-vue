<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="hero">
      <div class="hero-content">
        <!-- <h1 class="title">Mister Bitcoin</h1>
        <p class="subtitle">Your one-stop solution for all things Bitcoin.</p> -->
        <div class="buttons">
          <button class="send">Send Bitcoin</button>
          <button class="receive">Receive Bitcoin</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {

  }
  </script>
  
  <style lang="scss" scoped>
.hero {
  display: flex;
  justify-content:end;
  align-items:flex-end;

  height: 70vh;
  background: linear-gradient(
      hsla(0, 0%, 0%, 0.5),
      hsla(0, 0%, 0%, 0.5)
    ),
    url('../assets/img/Crypto-World.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}

.hero-content {
  text-align: center;
}

.title {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.subtitle {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.buttons {
  display: flex;
  justify-content:baseline;
  margin-bottom: 2em;
}

.buttons button {
  margin: 0 1em;
  padding: 0.5em 1em;
  font-size: 1em;
  color: #fff;
  background: hsla(160, 100%, 37%, 1);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.buttons button:hover {
  background: hsla(160, 100%, 37%, 0.8);
}
  </style>
  