<template>
    <section class="contact-filter">
        <input @input="onSetFilterBy" v-model="filterBy.txt" type="text" placeholder="Search...">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
.contact-filter {
    input {
      margin: 1rem 0;
      padding: .5rem;
      font-size: 1.2rem;
      border-radius: 8px;
    }
}
</style>