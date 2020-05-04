<template>
    <f7-popup class="employee-popup" :opened="popupOpened" @popup:closed="closeClickedHandler()">
        <f7-page>
            <f7-navbar :title="popupEmployee.name">
                <f7-nav-right>
                    <f7-link popup-close>Закрыть</f7-link>
                </f7-nav-right>
            </f7-navbar>

            <f7-block-title>Орг. структура</f7-block-title>
            <f7-list>
                <f7-list-item header="Подразделение" :title="popupEmployee.department">
                    <f7-icon slot="media" ios="f7:briefcase_fill" aurora="f7:briefcase_fill" md="material:work"></f7-icon>
                </f7-list-item>
                <f7-list-item header="Должность" :title="popupEmployee.position">
                    <f7-icon slot="media" ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:person"></f7-icon>
                </f7-list-item>
            </f7-list>

            <template v-if="popupEmployee.phones && popupEmployee.phones.length">
                <f7-block-title>Телефоны</f7-block-title>
                <f7-list>
                    <f7-list-item
                            v-for="phone in popupEmployee.phones"
                            :key="phone.number"
                            :external="phone.type !== 'Газовый'"
                            :link="phone.type !== 'Газовый' ? 'tel:' + phone.number : null"
                            :title="phone.number"
                            :footer="phone.type">
                        <f7-icon v-if="phone.type === 'Мобильный'" slot="media" ios="f7:device_phone_portrait" aurora="f7:device_phone_portrait" md="material:stay_current_portrait"></f7-icon>
                        <f7-icon v-else-if="phone.type === 'Городской'" slot="media" ios="f7:phone_fill" aurora="f7:phone_fill" md="material:phone"></f7-icon>
                        <f7-icon v-else slot="media" ios="f7:phone" aurora="f7:phone" md="material:local_gas_station"></f7-icon>
                    </f7-list-item>
                </f7-list>
            </template>

            <template v-if="popupEmployee.email && popupEmployee.email.length">
                <f7-block-title>Электронная почта</f7-block-title>
                <f7-list>
                    <f7-list-item external :link="'mailto:' + popupEmployee.email" :title="popupEmployee.email">
                        <f7-icon slot="media" ios="f7:envelope_fill" aurora="f7:envelope_fill" md="material:email"></f7-icon>
                    </f7-list-item>
                </f7-list>
            </template>

        </f7-page>
    </f7-popup>

</template>

<script>
    import { f7Popup, f7Page, f7Navbar, f7NavRight, f7Link, f7BlockTitle, f7List, f7ListItem, f7Icon } from 'framework7-vue';

    export default {
        name: "EmployeePage",
        components: {
            f7Popup, f7Page, f7Navbar, f7NavRight, f7Link, f7BlockTitle, f7List, f7ListItem, f7Icon
        },
        methods: {
            closeClickedHandler() {
                this.$store.commit('popupOpenChange', false);
            }
        },
        computed: {
            popupOpened: function () {
                return this.$store.state.popupOpened;
            },
            popupEmployee: function () {
                return this.$store.state.popupEmployee;
            }
        },
    }
</script>

<style scoped>

</style>
