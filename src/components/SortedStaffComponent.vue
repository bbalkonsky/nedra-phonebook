<template>
    <f7-page>
<!--        <f7-list-index-->
<!--                indexes="auto"-->
<!--                list-el=".list.contacts-list"-->
<!--                :scroll-list="true"-->
<!--                :label="true"-->
<!--                @listindex:select="onIndexSelect"-->
<!--        ></f7-list-index>-->

<!--        <f7-list :virtual-list="true">-->
<!--            <f7-list-group v-for="(value, key) in staff" :key="key">-->
<!--                <f7-list-item :title="key" group-title></f7-list-item>-->
<!--                <f7-list-item-->
<!--                        link="#"-->
<!--                        v-for="person in value"-->
<!--                        :title="person.cn"-->
<!--                        :key="person.id"-->
<!--                        @click="onItemClickHandler(person.cn)"></f7-list-item>-->
<!--            </f7-list-group>-->
<!--        </f7-list>-->

        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>

            <f7-searchbar
                    search-container=".virtual-list"
                    search-item="li"
                    search-in=".item-title"
                    :disable-button="!$theme.aurora"
                    class="searchbar-staff"
                    disable-button-text="Отмена"
                    placeholder="Поиск"
                    :clear-button="false"
                    expandable
            ></f7-searchbar>

            <f7-nav-right>
                <f7-link class="searchbar-enable" data-searchbar=".searchbar-staff" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-list
                class="searchbar-found sorted-staff-list"
                virtual-list
                :virtual-list-params="{ items: staff, searchAll, renderExternal, height: 54, rowsAfter: 30 }"
        >
            <ul>
                <template v-for="person in vlData.items">
<!--                    <f7-list-item v-if="person.firstByLetter" :key="person.cn" :title="person.cn.charAt(0)" group-title></f7-list-item>-->
                    <f7-list-item
                            :key="person.id"
                            link="#"
                            :title="person.cn"
                            :footer="person.title"
                            @click="onItemClickHandler(person.id)"
                            :style="`top: ${vlData.topPosition}px`"
                    ></f7-list-item>
                </template>

                <!--            <f7-list-group v-for="(value, key) in staff" :key="key">-->
                <!--                <f7-list-item :title="key" group-title></f7-list-item>-->
                <!--                <f7-list-item-->
                <!--                        link="#"-->
                <!--                        v-for="person in value"-->
                <!--                        :title="person.cn"-->
                <!--                        :key="person.id"-->
                <!--                        @click="onItemClickHandler(person.cn)"></f7-list-item>-->
                <!--            </f7-list-group>-->
            </ul>
        </f7-list>
    </f7-page>
</template>

<script>
    import { f7Page,
        f7List,
        // f7ListGroup,
        f7ListItem,
        f7Navbar,
        f7Searchbar,
        f7NavRight,
        f7Link,
        f7NavLeft, f7Block
        // f7ListIndex
    } from 'framework7-vue';

    export default {
        name: "SortedStaffComponent",
        data() {
            return {
                vlData: {
                    items: [],
                },
            };
        },
        components: {
            f7List,
            // f7ListGroup,
            f7ListItem,
            // eslint-disable-next-line vue/no-unused-components
        f7Page,f7Navbar,f7Searchbar,f7NavRight,f7Link,f7NavLeft, f7Block
            // f7ListIndex
        },
        props: {
            staff: Array
        },
        created() {
        },
        methods: {
            searchAll(query, items) {
                const found = [];
                for (let i = 0; i < items.length; i += 1) {
                    if (items[i].cn.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
                }
                return found; // return array with mathced indexes
            },
            renderExternal(vl, vlData) {
                this.vlData = vlData;
            },
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
    .sorted-staff-list {
        margin-top: 0;
        margin-bottom: 0;
    }
    .page-content .searchbar-staff:not(.searchbar-inline) {
        margin: auto;
        width: 100%;
    }

</style>
