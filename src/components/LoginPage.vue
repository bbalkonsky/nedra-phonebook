<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>Справочник 2.0</f7-login-screen-title>
        <f7-list form>
            <f7-list-input
                    label="Имя пользователя"
                    type="text"
                    placeholder="login@nedra.gazprom.ru"
                    :value="username"
                    @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="Пароль"
                    type="password"
                    placeholder="******"
                    :value="password"
                    @input="password = $event.target.value"
            ></f7-list-input>
        </f7-list>
        <f7-list>
            <f7-list-button @click="signIn">Войти</f7-list-button>
            <f7-block-footer>Доступ к приложению можно получить заполнив заявку на корпоративномпортале</f7-block-footer>
        </f7-list>
    </f7-page>
</template>

<script>
    import { f7Page, f7LoginScreenTitle, f7List, f7ListInput, f7ListButton, f7BlockFooter } from 'framework7-vue';

    export default {
        name: "LoginPage",
        components: {
            f7Page, f7LoginScreenTitle, f7List, f7ListInput, f7ListButton, f7BlockFooter
        },
        data() {
            return {
                username: 'user',
                password: 'user',
            };
        },
        methods: {
            signIn() {
                this.openCustomDialog();
                const self = this;
                this.$store.dispatch('authorization', {
                    username: self.username,
                    password: self.password
                }).then(() => {
                    this.$f7router.navigate('/');
                }).catch(() => {
                    this.$f7.dialog.alert(`Имя пользователя или пароль указаны неверно`, '', () => {
                    });
                }).finally(() => {
                    this.closeCustomDialog();
                });


                // const self = this;
                // const app = self.$f7;
                // const router = self.$routerf7;
                // app.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
                //     this.$store.commit('authorizeUser', true);
                //     router.navigate('/');
                // });
            },
            openCustomDialog() {
                const self = this;
                self.$f7.dialog.preloader('Подожди, я пошел на сервер...');
            },
            closeCustomDialog() {
                const self = this;
                self.$f7.dialog.close();
            }
        },
    };
</script>
