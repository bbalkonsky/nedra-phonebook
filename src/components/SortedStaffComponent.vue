<template>
    <f7-page ptr @ptr:refresh="loadMore">
        <f7-list-index
                indexes="auto"
                list-el=".list.contacts-list"
                :scroll-list="true"
                :label="true"
                @listindex:select="onIndexSelect"
        ></f7-list-index>

        <f7-list contacts-list>
            <f7-list-group v-for="(value, key) in staff" :key="key">
                <f7-list-item :title="key" group-title></f7-list-item>
                <f7-list-item
                        link="#"
                        v-for="person in value"
                        :title="person.cn"
                        :key="person.cn"
                        @click="onItemClickHandler(person.cn)"></f7-list-item>
            </f7-list-group>
        </f7-list>
    </f7-page>
</template>

<script>
    import { f7Page, f7ListIndex, f7List, f7ListGroup, f7ListItem } from 'framework7-vue';

    export default {
        name: "SortedStaffComponent",
        components: {
            f7Page, f7ListIndex, f7List, f7ListGroup, f7ListItem
        },
        props: {
            staff: Object
        },
        created() {

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
                this.$store.commit('personPopupContentChange', id);
                if (this.$store.state.personPopupContent) {
                    this.$store.commit('personPopupOpenedChange', true)
                    // this.$routerf7.back(); TODO непонятно, надо ли эта фичу
                }
            }
        },
    }
</script>

<style scoped>

</style>
