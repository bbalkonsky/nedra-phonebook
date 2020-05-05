<template>
    <sorted-staff-component v-if="Object.keys(groupedStaff).length" :employees="groupedStaff" />
</template>

<script>
    import SortedStaffComponent from "@/components/SortedStaffComponent";
    import repository from "@/api/repository";

    export default {
        name: "StaffTab",
        components: {SortedStaffComponent},
        computed: {
            groupedStaff() {
                return this.$store.getters.groupedStaff
            }
        },
        created() {
            repository.getStaff().then(response => {
                this.$store.commit('staffResponse', response.data);
            })
        }
    }
</script>

<style scoped>

</style>
