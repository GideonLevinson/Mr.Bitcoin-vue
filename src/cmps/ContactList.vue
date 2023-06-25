<template>
    <section class="contact-list">
        <h1>Contact List</h1>
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="actions">
                    <RouterLink :to="`/contact/${contact._id}`">
                        <button>Details</button>
                    </RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`">
                        <button>Edit</button>
                    </RouterLink>
                    <button @click="onRemoveContact(contact._id)">x</button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>

import ContactPreview from '@/cmps/ContactPreview.vue'

export default {
    props: {
        contacts: { type: Array, required: true },
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('delete', contactId)
        }
    },
    components: {
        ContactPreview,

    }

}
</script>

<style lang="scss">
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 2.8s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

.contact-list {

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
        gap: 20px;
        padding: 0px;
        list-style: none;


        li {
            padding: 1em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: 1px solid rgb(179, 159, 47);
            border-radius: 12px;
        }
    }
}

.actions {
    margin-bottom: 1rem;
}
</style>