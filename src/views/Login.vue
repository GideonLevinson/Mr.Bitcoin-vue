<template>
  <div class="login-page">
    <section class="signup-info">
      <h1>Sign up</h1>
      <form class="signup-form" @submit.prevent="onLogin">
        <label for="username-input"></label>
        <input autofocus id="username-input" type="text" v-model="username" placeholder="Enter username"
          class="secondary-input" />
        <button class="signup-btn">Create an account</button>
      </form>
      <h3>or</h3>
      <button @click="onQuickStart" class="guest-login">Guest login</button>
    </section>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onLogin() {
      if (this.username.length < 3) {
      }
      this.$store.dispatch({ type: "signup", username: this.username })
      this.$router.push("/home");
    },
    onQuickStart() {
      this.$store.dispatch({ type: "signup", username: "Guest" })
      this.$router.push("/home")
    },
  },
}
</script>
  
<style lang="scss">

.signup-info {

  margin: 114px 80px;
  width: 80vw;
  box-sizing: unset;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 1.5rem 0;
  }



  span {
    color: beige;
    font-family: 'Lato', sans-serif;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    line-height: 57px;
    margin: rem(16px) 0;
  }

  .signup-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input {
      margin-bottom: rem(26px);
      padding: .8rem;
      font-size: 1.2rem;
      border-radius: 8px;
    }

    .signup-btn {
      padding: .8rem;
      font-size: 1.2rem;
      border-radius: 8px;
      background-color: hsla(160, 100%, 37%, 1);
    }
  }

  h3 {
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
    color: hsla(160, 100%, 37%, 1);
  }
  .guest-login {
    margin-top: 2rem;
    font-size: 1.2rem;
    border-radius: 8px;
    width: 20%;
    align-self: center;
    padding: .5rem;
  }
}
</style>
