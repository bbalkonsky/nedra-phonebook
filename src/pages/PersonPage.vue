<template>
    <f7-popup class="employee-popup" :opened="popupOpened" @popup:closed="closeClickedHandler()">
        <f7-page>
            <f7-navbar :title="'Карточка'">
                <f7-nav-right>
                    <f7-link popup-close>Закрыть</f7-link>
                </f7-nav-right>
            </f7-navbar>

            <f7-block-title class="person-name" medium>{{person.cn}}</f7-block-title>

            <f7-block-title>Орг. структура</f7-block-title>
            <f7-list>
                <f7-list-item v-if="person.l" :title="person.l">
                    <f7-icon slot="media" ios="f7:building_2_fill" aurora="f7:building_2_fill" md="f7:building_2_fill"></f7-icon>
                </f7-list-item>
                <f7-list-item v-if="person.company" :title="person.company">
                    <f7-icon slot="media" ios="f7:briefcase_fill" aurora="f7:briefcase_fill" md="material:work"></f7-icon>
                </f7-list-item>
                <f7-list-item v-if="person.division" :title="person.division">
                    <f7-icon slot="media" ios="f7:" aurora="f7:" md="material:"></f7-icon>
                </f7-list-item>
                <f7-list-item v-if="person.departmentNumber" :title="person.departmentNumber">
                    <f7-icon slot="media" ios="f7:" aurora="f7:" md="material:"></f7-icon>
                </f7-list-item>
                <f7-list-item v-if="person.description" :title="person.description">
                    <f7-icon slot="media" ios="f7:" aurora="f7:" md="material:"></f7-icon>
                </f7-list-item>

                <f7-list-item footer="Должность" :title="person.title">
                    <f7-icon slot="media" ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:person"></f7-icon>
                </f7-list-item>
            </f7-list>

            <template v-if="person.telephoneNumber || person.ipPhone || person.mobile || person.facsimileTelephoneNumber || person.mail">
                <f7-block-title>Контакты</f7-block-title>
                <f7-list>
                    <f7-list-item
                            v-if="person.mobile"
                            :external="true"
                            :link="'tel:' + person.mobile"
                            :title="person.mobile"
                            :footer="'Мобильный'">
                        <f7-icon slot="media" ios="f7:device_phone_portrait" aurora="f7:device_phone_portrait" md="material:stay_current_portrait"></f7-icon>
                    </f7-list-item>
                    <f7-list-item
                            v-if="person.telephoneNumber"
                            :external="true"
                            :link="'tel:' + person.telephoneNumber"
                            :title="person.telephoneNumber"
                            :footer="'Городской'">
                        <f7-icon slot="media" ios="f7:phone_fill" aurora="f7:phone_fill" md="material:phone"></f7-icon>
                    </f7-list-item>
                    <f7-list-item
                            v-if="person.ipPhone"
                            :title="person.ipPhone"
                            :footer="'Газовый'">
                        <f7-icon slot="media" ios="f7:phone" aurora="f7:phone" md="material:local_gas_station"></f7-icon>
                    </f7-list-item>
                    <f7-list-item
                            v-if="person.facsimileTelephoneNumber"
                            :title="person.facsimileTelephoneNumber"
                            :footer="'Факс'">
                        <f7-icon slot="media" ios="f7:printer_fill" aurora="f7:printer_fill" md="material:phone"></f7-icon>
                    </f7-list-item>

                    <f7-list-item external :link="'mailto:' + person.mail" :title="person.mail">
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
        name: "PersonPage",
        components: {
            f7Popup, f7Page, f7Navbar, f7NavRight, f7Link, f7BlockTitle, f7List, f7ListItem, f7Icon
        },
        methods: {
            closeClickedHandler() {
                this.$store.commit('personPopupOpenedChange', false);
            }
        },
        computed: {
            popupOpened: function () {
                return this.$store.state.isPersonPopupOpened;
            },
            person: function () {
                return this.$store.state.personPopupContent;
            }
        }
    }
</script>

<style scoped>
    .person-name {
        overflow: visible;
        white-space: normal;
    }
</style>
