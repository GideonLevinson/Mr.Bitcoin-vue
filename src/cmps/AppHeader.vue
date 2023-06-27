<template>
    <header class="app-header" :class="{ isSignupPage: isSignupPage }">
        <section class="app-navigation">
            <h1><span>Mr.</span>BitCoin- Vue</h1>
            <nav class="nav-links">
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/stats">Statistics</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </section>
        <section v-if="user" class="login-user">
            <div class="avatar">
                <h3 class="initials">{{ user.name }}</h3>
                <h3>balance: <span>฿{{ user.balance }}</span></h3>
            </div>
            <router-link to="/">
                {{ isLoggedInUser ? "Logout" : "Sign up" }}
            </router-link>
        </section>
    </header>
</template>

<script>

export default {
    data() {
        return {
            user: null,
            isSignupPage: false,
        }

    },
    async created() {
        this.user = this.$store.state.user.user
    },
    mounted() {
        if (this.$route.path === "/") this.isSignupPage = true
        else this.isSignupPage = false
    },
    computed: {
        isLoggedInUser() {
            return !!this.$store.state.user.user
        },
        getUser() {
            let loggedInUser = this.$store.state.user;
            if (!loggedInUser) router.push({ path: `/signup` })
            else {
                return loggedInUser
            }
        },
    },
    methods: {
    watchRoutePath() {
      if (this.$route.path === "/") {
        this.isSignupPage = true;
      } else {
        this.isSignupPage = false;
      }
    },
  },
  watch: {
    "$route.path": "watchRoutePath",
    "$store.state.user.user": {
      handler(newUser) {
        this.user = newUser;
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss">
.fab.fa-bitcoin-sign {
    font-size: 24px;
    color: #f7931a;
}

.app-header {
    position: sticky;
    top: 0;
    background-color: var(--color-background);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-border);
    width: 100%;

    &.isSignupPage {
        .nav-links {
            display: none;
        }

        .login-user {
            display: none;
        }
    }

    .app-navigation {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .login-user {
        a {
            font-size: 1rem;
            color: var(--color-text);
        }
    }



    h1 {
        font-size: 2rem;
        font-weight: 600;
    }

    span {
        color: hsla(160, 100%, 37%, 1);
    }

    .quick-stats {
        margin-top: 1rem;
    }
}



nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
    }
}
</style>
