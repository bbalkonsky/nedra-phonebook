<template>
    <people-list-component :allPeople="allPeople" :showIndex="true"></people-list-component>
</template>

<script>
    import PeopleListComponent from "@/components/PeopleListComponent";

    export default {
        name: "PeopleTab",
        components: {PeopleListComponent},
        computed: {
            allPeople () {
                return this.$store.getters.getAllPeople
            }
        },

    }
</script>

<style scoped>

</style>
