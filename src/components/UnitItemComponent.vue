<template>
    <span>
        <ul v-for="department in departments" :key="department.name">
            <f7-list-item :link="`/foundPeople/${department.name}/`" @click="popupOpened = true">
                {{department.name}}
            </f7-list-item>
            <li v-if="department.subDepartments && department.subDepartments.length">
                <ul>
                    <unit-item-component :departments="department.subDepartments"></unit-item-component>
                </ul>
            </li>
        </ul>
    </span>
</template>

<script>
    import {f7ListItem} from 'framework7-vue';

    export default {
        name: "UnitItemComponent",
        components: {
            f7ListItem
        },
        props: {
            departments: {}
        }
    }
</script>

<style scoped>

</style>
