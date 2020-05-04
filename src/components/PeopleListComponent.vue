<template>
    <f7-page>
        <f7-list-index
                v-if="showIndex"
                indexes="auto"
                list-el=".list.contacts-list"
                :scroll-list="true"
                :label="true"
                @listindex:select="onIndexSelect"
        ></f7-list-index>

        <f7-list contacts-list>
            <f7-list-group v-for="(value, key) in allPeople" :key="key">
                <f7-list-item :title="key" group-title></f7-list-item>
                <f7-list-item
                        link="#"
                        v-for="employee in value"
                        :title="employee.name"
                        :footer="showPosition ? employee.position : null"
                        :key="employee.id"
                        @click="onItemClickHandler(employee.id)"></f7-list-item>
            </f7-list-group>
        </f7-list>
    </f7-page>
</template>

<script>
    import { f7Page, f7ListIndex, f7List, f7ListGroup, f7ListItem } from 'framework7-vue';

    export default {
        name: "PeopleListComponent",
        components: {
            f7Page, f7ListIndex, f7List, f7ListGroup, f7ListItem
        },
        props: {
            allPeople: {},
            showIndex: Boolean,
            showPosition: Boolean
        },
        methods: {
            onIndexSelect(itemContent) {
                console.log(itemContent);
            },
            loadMore(done) {
                setTimeout(() => {
                    console.log('PUUUUUUUUUUUL!');
                    done();
                }, 1000);
            },
            onItemClickHandler(id) {
                this.$store.commit('popupEmployeeChange', id);
                if (this.$store.state.popupEmployee) {
                    this.$store.commit('popupOpenChange', true)
                    // this.$routerf7.back(); TODO непонятно, надо ли эта фичу
                }
            }
        },
    }
</script>

<style scoped>

</style>
