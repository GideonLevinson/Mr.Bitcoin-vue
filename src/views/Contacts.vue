<template>
    <UserMsg />
  <h1>Contacts</h1>
  <ContactFilter @filter="onSetFilterBy" />
  <ContactList @delete="deleteContact" v-if="contacts" :contacts="filteredContacts" />
</template>

<script>
import {contactService} from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import UserMsg from '@/cmps/UserMsg.vue'
import  ContactList  from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {},
        }
    },
    methods: {
        async deleteContact(contactId) {
            const msg = {
                txt: `Contact ${contactId} deleted...`,
                type: 'success',
            }
            await contactService.deleteContact(contactId)

            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx, 1)
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    }
}

</script>

<style lang="scss">
  
</style>