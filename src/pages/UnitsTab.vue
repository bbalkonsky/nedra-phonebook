<template>
    <f7-page>
        <f7-list v-if="departments.length" class="departments-list">
            <unit-item-component :departments="departments"/>
            <f7-list-item class="searchbar-not-found" title="Nothing found"></f7-list-item>
        </f7-list>

        <f7-block v-else class="row align-items-stretch text-align-center">
            <f7-col>
                <f7-preloader :size="42"></f7-preloader>
            </f7-col>
        </f7-block>

    </f7-page>
</template>

<script>
    import UnitItemComponent from "@/components/UnitItemComponent";
    import {f7Page, f7List, f7ListItem, f7Block, f7Col, f7Preloader} from 'framework7-vue';
    import repository from "@/api/repository";

    export default {
        name: "UnitTab",
        components: {
            f7Page, f7List, f7ListItem, f7Block, f7Col, f7Preloader,
            UnitItemComponent
        },
        computed: {
            departments() {
                return this.$store.state.units
            },
        },
        methods: {
            loadMore(done) {
                setTimeout(() => {
                    console.log('PUUUUUUUUUUUL!');
                    done();
                }, 1000);
            }
        },
        created() {
            repository.getUnits().then(response => {
                this.$store.commit('unitsResponse', response.data);
            });
        }
    }
</script>

<style scoped>

</style>
