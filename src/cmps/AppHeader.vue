<template>
    <header class="app-header">
        <section class="app-navigation">
            <h1><span>Mr.</span>BitCoin- Vue</h1>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/stats">Statistics</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </section>
        <section v-if="user" class="login-user">
            <div class="avatar">
                <h3 class="initials">{{ user.name }}</h3>
                <h3>balance: <span>฿ {{ user.balance }}</span></h3>
            </div>
        </section>
        <section v-else="" class="login-user">
            <button>Login</button>
        </section>
    </header>
</template>

<script>
import { userService } from '../services/user.service.js'

export default {
    data() {
        return {
            user: null,
        }

    },
    async created() {
        this.user = await userService.getUser()
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
