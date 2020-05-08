<template>
    <span>
        <ul v-for="unit in units" :key="unit.name">
            <f7-list-item :link="`/foundPeople/${unit.name}/`" @click="popupOpened = true">
                {{unit.name}}
            </f7-list-item>
            <li v-if="unit.subDepartments && unit.subDepartments.length">
                <ul>
                    <unit-item-component :units="unit.subDepartments"></unit-item-component>
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
            units: {}
        }
    }
</script>

<style scoped>

</style>
