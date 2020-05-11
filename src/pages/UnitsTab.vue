<template>
    <f7-page>
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>

            <f7-searchbar
                    class="searchbar-units"
                    search-container=".units-list"
                    search-in=".item-content"
                    :disable-button="!$theme.aurora"
                    disable-button-text="Отмена"
                    placeholder="Поиск"
                    :clear-button="false"
                    expandable
            ></f7-searchbar>
            <f7-nav-right>
                <f7-link class="searchbar-enable" data-searchbar=".searchbar-units" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-list class="units-list">
            <unit-item-component v-if="units.length" :units="units"/>
            <f7-list-item class="searchbar-not-found" title="Nothing found"></f7-list-item>
        </f7-list>

        <f7-block v-if="!units.length" class="row align-items-stretch text-align-center">
            <f7-col>
                <f7-preloader :size="42"></f7-preloader>
            </f7-col>
        </f7-block>

    </f7-page>
</template>

<script>
    import UnitItemComponent from "@/components/UnitItemComponent";
    import {f7Page, f7List, f7ListItem, f7Block, f7Col, f7Preloader, f7Navbar, f7NavLeft, f7Link, f7Searchbar, f7NavRight} from 'framework7-vue';
    import repository from "@/api/repository";

    export default {
        name: "UnitTab",
        components: {
            f7Page, f7List, f7ListItem, f7Block, f7Col, f7Preloader, f7Navbar, f7NavLeft, f7Link, f7Searchbar, f7NavRight,
            UnitItemComponent
        },
        computed: {
            units() {
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
            // repository.getUnits().then(response => {
            //     this.$store.commit('unitsResponse', response.data);
            // });
        },
        async mounted() {
            try {
                const token = await localStorage.jwtToken ? localStorage.getItem('jwtToken') : '';
                const response = await repository.getUnits(token);
                this.$store.commit('unitsResponse', response.data);
            } catch(err) {
                if (err.response.status === 401) {
                    localStorage.removeItem('jwtToken');
                    this.$f7router.navigate('/login/');
                } else {
                    this.openErrorDialog(`Упс! Что-то пошло не так!\nПопробуйте снова`);
                }
            }
        }
    }
</script>

<style scoped>
    .page-content .searchbar-units:not(.searchbar-inline) {
        margin: auto;
        width: 100%;
    }
</style>
