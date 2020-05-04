<template>
    <template v-for="(idx, department) in departments">
        <f7-list-item  link="#" :title="department.name" :key="department.id" @click="popupOpened = true"></f7-list-item>
        <li v-if="department.subDepartments && department.subDepartments.length" :key="idx + department.id">
            <ul>
                <departments-item-component :departments="department.subDepartments"></departments-item-component>
            </ul>
        </li>
    </template>
</template>

<script>
    export default {
        name: "DepartmentsItemComponent",
        props: {
            departments: {}
        }
    }
</script>

<style scoped>

</style>
