<template>
    <f7-navbar>
        <f7-nav-left>
            <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
        </f7-nav-left>

        <f7-searchbar
                class="searchbar"
                search-container=".page-content"
                search-in=".item-content"
                :disable-button="!$theme.aurora"
                disable-button-text="Отмена"
                placeholder="Поиск"
                :clear-button="false"
                expandable
        ></f7-searchbar>
        <f7-nav-right>
            <f7-link class="searchbar-enable" data-searchbar=".searchbar" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
        </f7-nav-right>
    </f7-navbar>
</template>

<script>
    import { f7Navbar, f7NavLeft, f7Link, f7Searchbar, f7NavRight } from 'framework7-vue';

    export default {
        name: "NavbarComponent",
        components: {
            f7Navbar, f7NavLeft, f7Link, f7Searchbar, f7NavRight
        },
        // mounted() {
        //     document.getElementById('hui').addEventListener("huii", function(event) {
        //       console.log(event.detail.name);
        //     });
        // }
    }
</script>

<style scoped>

</style>
