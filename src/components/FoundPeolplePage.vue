<template>
  <f7-page name="found-people-page">
    <f7-navbar back-link="Назад" style="z-index: 999;"> <!-- TODO чот мне кажется это ппц-->
      <f7-nav-title>Подразделение</f7-nav-title>
    </f7-navbar>

    <people-list-component :allPeople="allPeople" :showIndex="false" :showPosition="true"></people-list-component>
  </f7-page>
</template>

<script>
  import PeopleListComponent from "@/components/PeopleListComponent";
  import { f7Page, f7Navbar, f7NavTitle } from 'framework7-vue';

  export default {
    name: 'FoundPeoplePage',
    components: {
      PeopleListComponent,
      f7Page, f7Navbar, f7NavTitle},
    computed: {
      allPeople () {
        return this.$store.getters.getPeopleByDepartment(this.$f7route.params.id)
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
