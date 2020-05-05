<template>
  <f7-page name="found-people-page">
    <f7-navbar back-link="Назад" style="z-index: 999;"> <!-- TODO чот мне кажется это ппц-->
      <f7-nav-title>Подразделение</f7-nav-title>
    </f7-navbar>

    <f7-list contacts-list>
      <f7-list-item
              link="#"
              v-for="person in staff"
              :title="person.cn"
              :footer="person.title"
              :key="person.cn"
              @click="onItemClickHandler(person.cn)"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
  import {f7Page, f7Navbar, f7NavTitle, f7List, f7ListItem} from 'framework7-vue';

  export default {
    name: 'UnitStaffPage',
    components: {
      f7Page, f7Navbar, f7NavTitle, f7List, f7ListItem
    },
    computed: {
      staff () {
        return this.$store.getters.getStaffByUnit(this.$f7route.params.id)
      }
    },
    methods: {
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
