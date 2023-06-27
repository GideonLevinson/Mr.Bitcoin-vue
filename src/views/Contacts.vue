<template>
    <h1>Contacts List</h1>
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList  @remove="removeContact" v-if="contacts?.length" :contacts="filteredContacts" />
    <section v-else>
        <h1>You have no contacts... <span>Add one now</span></h1> 
        
        </section>
</template>

<script>
import { showSuccessMsg, showErrorMsg } from '@/services/eventBus.service.js'

import UserMsg from '@/cmps/UserMsg.vue'
import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'

export default {
    data() {
        return {
            filterBy: {},
        }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
    },
    methods: {
        async removeContact(contactId) {
          try {
            this.$store.dispatch({ type: 'removeContact', contactId })
            showSuccessMsg(`Contact ${contactId} successfully removed`)
           } catch(err) {
            showErrorMsg('Cannot remove contact')
           }
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            const filteredContacts = this.contacts.filter(contact => {
                return (
                    regex.test(contact.name) ||
                    regex.test(contact.email) ||
                    regex.test(contact.phone)
                )
            })
            return filteredContacts
        },
        contacts() { return this.$store.getters.contacts }
    },
  
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    }
}

</script>

<style lang="scss"></style>