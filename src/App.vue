<template>
    <f7-app :params="f7params" :theme-dark="isDarkThemeActive">

        <f7-view class="main-view" main :url="isUserAuthorized ? '/' : '/login/'"></f7-view>

        <person-page></person-page>

        <div id="popup-anchor"></div>
    </f7-app>
</template>

<script>
    import PersonPage from "@/pages/PersonPage";
    import { f7App, f7View } from 'framework7-vue';
    import routes from "@/js/routes";

    export default {
        name: 'App',
        components: {
            f7App, f7View,
            PersonPage,
        },
        data() {
            return {
                isUserAuthorized: false,
                f7params: {
                    name: 'Телефонный справочник',
                    id: 'com.myapp.phones',
                    routes: routes
                },
            }
        },
        methods: {
            onReloadPageClicked() {
                document.location.reload();
            }
        },
        created() {
            if (localStorage.jwtToken && localStorage.jwtToken.length) {
                this.isUserAuthorized = true;
            }
            if (localStorage.isDarkTheme) {
                this.$store.commit('themeSwitch', JSON.parse(localStorage.getItem('isDarkTheme')));
            }
        },
        mounted() {
            window.addEventListener('load', function () {
                window.history.pushState({}, '')
            });
            //
            window.addEventListener('popstate', function () {
                window.history.pushState({}, '')
            });

            // this.$f7.popover.open('.popover-sw');

            document.getElementById('framework7-root').addEventListener("swWasUpdated", () => {
                this.$f7.dialog.create({
                    title: 'Внимание!',
                    text: 'Приложение было обновлено. \nЧтобы изменения вступили в силу необходимо выполнить перезагрузку!',
                    cssClass: 'service-worker-dialog',
                    buttons: [
                        {
                            text: 'OK'
                        },
                        {
                            text: 'Перезагрузить',
                            onClick: this.onReloadPageClicked
                        }
                    ]
                }).open()
            });

            // document.getElementById('framework7-root').addEventListener("swWasInstalled", () => {
            //     this.$f7.dialog.create({
            //         title: 'Я готов!',
            //         buttons: [{text: 'OK'}]
            //     }).open()
            // });

            // document.getElementById('framework7-root').addEventListener("swWasErrored", () => {
            //     this.$f7.dialog.create({ //TODO переделать на toast
            //         title: 'Не удалось установить приложение. Попробуйте обновить страницу',
            //         buttons: [{text: 'OK'}]
            //     }).open()
            // });

            if (this.$f7.device.ios) {
                document.getElementById('framework7-root').addEventListener("swWasInstalled", () => {
                    if (!window.matchMedia('(display-mode: standalone)').matches) {
                        this.$f7.popover.create({
                            targetEl: '#popup-anchor',
                            content: '<div class="popover popover-sw">' +
                                '<p>Что бы установить приложение на телефон <br/> нажмите ' +
                                '<img src="./img/share.png"/>\n' +
                                ', а затем <img src="./img/add.png"/></p>\n' +
                                '</div>'})
                            .open();

                    }
                });
            }
        },
        computed: {
            isDarkThemeActive() {
                return this.$store.state.isDarkThemeActive;
            }
        }
    }
</script>

<style>
    .main-view {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    #popup-anchor {
        width: 1px;
        height: 1px;
        position: fixed;
        bottom: 0;
        left: 50%;
        right: 50%;
    }

    .popover-sw p {
        padding: 0 10px;
    }
    .popover-sw p img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
</style>
