<template>
    <f7-panel left :reveal="true" resizable :swipe="false">
        <f7-view>
            <f7-page>
                <f7-block-title>
                    <f7-icon ios="f7:book_circle" aurora="f7:book_circle" md="material:book"></f7-icon>
                    Справочник 2.0</f7-block-title>
                <f7-list>
                    <f7-list-item>
                        <span>Темная тема</span>
                        <f7-toggle :checked="isDarkTheme" @toggle:change="onThemeToggle($event)"></f7-toggle>
                    </f7-list-item>

                    <f7-list-button title="Выйти" color="red" panel-close="left" outline @click="logoutHandler()"></f7-list-button>
                    <f7-list-button title="Обновить" @click="updateData()" />
                </f7-list>
            </f7-page>
        </f7-view>
    </f7-panel>
</template>

<script>
    import { f7Page, f7Panel, f7ListItem, f7List, f7Toggle, f7View, f7BlockTitle, f7Icon, f7ListButton } from 'framework7-vue';
    import repository from "@/api/repository";
    
    export default {
        name: "LeftPanelComponent",
        components: {
            f7Page, f7Panel, f7ListItem, f7List, f7Toggle, f7View, f7BlockTitle, f7Icon, f7ListButton
        },
        methods: {
            onThemeToggle(isDarkTheme) {
                this.$store.commit('themeSwitch', isDarkTheme);
            },
            logoutHandler() {
                localStorage.removeItem('jwtToken');
                this.$f7router.navigate('/login/');
            },
            updateData() {
                repository.getUnits().then(response => {
                    this.$store.commit('unitsResponse', response.data);
                });
                repository.getStaff().then(response => {
                    this.$store.commit('staffResponse', response.data);
                });
            }
        },
        computed: {
            isDarkTheme() {
                return this.$store.state.isDarkThemeActive;
            }
        }
    }
</script>

<style scoped>

</style>
