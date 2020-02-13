<template>
  <div id="app">
    <Navbar :search="search"></Navbar>
    <router-view @search="getSearch" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      search: false
    };
  },
  methods: {
    getSearch(value) {
      this.search = value;
    }
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  background-color: rgb(207, 207, 207);
  font-family: Arial;
}
</style>
