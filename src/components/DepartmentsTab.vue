<template>
    <f7-page>
        <f7-list class="departments-list">
<!--            <departments-item-component departments="departments"></departments-item-component>-->

            <f7-list-item class="searchbar-not-found" title="Nothing found"></f7-list-item>

            <template v-for="department in departments">
                <f7-list-item :link="`/foundPeople/${department.id}/`" :key="department.id"><span>{{department.name}}</span></f7-list-item>
                <li v-if="department.subDepartments.length" :key="'sub' + department.id">
                    <ul>
                        <template v-for="subDepartment in department.subDepartments">
                            <f7-list-item :link="`/foundPeople/${subDepartment.id}/`" :key="subDepartment.id"><span>{{subDepartment.name}}</span></f7-list-item>
                            <li v-if="subDepartment.subDepartments.length" :key="'sub' + subDepartment.id">
                                <ul>
                                    <template v-for="subSubDepartment in subDepartment.subDepartments">
                                        <f7-list-item :link="`/foundPeople/${subSubDepartment.id}/`" :key="subSubDepartment.id"><span>{{subSubDepartment.name}}</span></f7-list-item>
                                    </template>
                                </ul>
                            </li>
                        </template>
                    </ul>
                </li>
            </template>
        </f7-list>

<!--        <f7-block class="row align-items-stretch text-align-center" >-->
<!--            <f7-col>-->
<!--                <f7-preloader :size="42"></f7-preloader>-->
<!--            </f7-col>-->
<!--        </f7-block>-->

    </f7-page>
</template>

<script>
    // import DepartmentsItemComponent from "@/components/DepartmentsItemComponent";

    import { f7Page, f7List, f7ListItem } from 'framework7-vue';

    export default {
        name: "DepartmentsTab",
        // components: {DepartmentsItemComponent},
        components: {
            f7Page, f7List, f7ListItem
        },
        computed: {
            departments () {
                return this.$store.state.departments
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
    }
</script>

<style scoped>

</style>
