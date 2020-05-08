<template>
    <f7-page>
        <sorted-staff-component v-if="this.$store.state.staff.length" :staff="orderedStaff" />

        <f7-block v-else class="row align-items-stretch text-align-center" >
            <f7-col>
                <f7-preloader :size="42"></f7-preloader>
            </f7-col>
        </f7-block>
    </f7-page>
</template>

<script>
    import SortedStaffComponent from "@/components/SortedStaffComponent";
    import {f7Page, f7Block, f7Col, f7Preloader} from 'framework7-vue';
    import repository from "@/api/repository";

    export default {
        name: "StaffTab",
        components: {f7Page, f7Block, f7Col, f7Preloader, SortedStaffComponent},
        computed: {
            orderedStaff() {
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
