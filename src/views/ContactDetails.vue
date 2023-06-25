<template>
    <article v-if="contact" class="contact-details">
        <h2>{{ contact.id }}</h2>
        <h2>{{ contact.name }}</h2>
        <h2>{{ contact.email }}</h2>
        <h2>{{ contact.phone }}</h2>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </article>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>

<style lang="scss"></style>