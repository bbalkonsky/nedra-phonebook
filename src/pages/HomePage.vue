<template>
    <f7-page :page-content="false">

<!--        <navbar-component></navbar-component>-->

        <f7-toolbar tabbar bottom>
            <f7-link tab-link="#tab-1" icon-ios="f7:briefcase_fill" icon-aurora="f7:briefcase_fill" icon-md="material:work" tab-link-active></f7-link>
            <f7-link tab-link="#tab-2" icon-ios="f7:person_circle_fill" icon-aurora="f7:person_circle_fill" icon-md="material:person" ></f7-link>
        </f7-toolbar>
        <f7-tabs>
            <f7-tab id="tab-1" class="page-content" tab-active>
                <departments-tab></departments-tab>
            </f7-tab>
            <f7-tab id="tab-2" class="page-content" >
                <people-tab></people-tab>
            </f7-tab>
        </f7-tabs>

        <left-panel-component></left-panel-component>

<!--        <f7-popover class="popover-sw">-->
<!--            <f7-block>-->
<!--                <p>Что бы установить приложение на телефон <br/> нажмите <img style="width: 20px; height: 20px;" src="../assets/share.png"/>-->
<!--                    , а затем <img style="width: 20px; height: 20px;" src="../assets/add.png"/></p>-->
<!--            </f7-block>-->
<!--        </f7-popover>-->
    </f7-page>
</template>

<script>
    import DepartmentsTab from "@/pages/UnitsTab";
    import PeopleTab from "@/pages/StaffTab";
    import LeftPanelComponent from "@/components/LeftPanelComponent";
    import NavbarComponent from "@/components/NavbarComponent";
    import {f7Page, f7Link, f7Tab, f7Tabs, f7Toolbar} from 'framework7-vue';

    export default {
        name: "HomePage",
        components: {
            f7Page, f7Link, f7Tabs, f7Tab, f7Toolbar,
            // eslint-disable-next-line vue/no-unused-components
            NavbarComponent,
            DepartmentsTab,
            PeopleTab,
            LeftPanelComponent
        }
    }
</script>

<style scoped>

</style>
