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
            <f7-block-footer>
                <span>Доступ к приложению можно получить заполнив заявку на корпоративном портале.</span>
                <br>
                <br>
                <span style="color: #dc0000">Только для использования работниками ООО «Газпром недра». Передача сторонним организациям и физическим лицам запрещена.</span>
            </f7-block-footer>
        </f7-list>
    </f7-page>
</template>

<script>
    import { f7Page, f7LoginScreenTitle, f7List, f7ListInput, f7ListButton, f7BlockFooter } from 'framework7-vue';
    import repository from "@/api/repository";

    export default {
        name: "LoginPage",
        components: {
            f7Page, f7LoginScreenTitle, f7List, f7ListInput, f7ListButton, f7BlockFooter
        },
        data() {
            return {
                username: 'string',
                password: 'string',
            };
        },
        methods: {
            async signIn() {
                this.openWaitingDialog();
                // const self = this;
                try {
                    const response = await repository.login(this.username, this.password);
                    localStorage.jwtToken = response.data.accessToken;
                    this.$f7router.navigate('/');
                } catch(err) {
                    if (err.response.status === 401) {
                        this.openErrorDialog(`Имя пользователя или пароль указаны неверно`);
                    } else {
                        this.openErrorDialog(`Упс! Что-то пошло не так!\nПопробуйте снова`);
                    }

                }
                this.closeWaitingDialog();
            },
            openWaitingDialog() {
                this.$f7.dialog.preloader('Пожалуйста, подождите...');
            },
            closeWaitingDialog() {
                this.$f7.dialog.close();
            },
            openErrorDialog(message) {
                const dialog = this.$f7.dialog.create({
                    text: message,
                    closeByBackdropClick: true
                }).open();
                setTimeout(function () {
                    dialog.close();
                }, 2000);
            }
        },
    };
</script>
