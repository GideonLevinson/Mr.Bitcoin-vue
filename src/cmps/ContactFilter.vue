<template>
    <section class="contact-filter">
        <p>Search: </p>
        <input @input="onSetFilterBy" v-model="filterBy.txt" type="text">
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

</style>