<template>
  <div id="app">
    <Navbar :search="search" @menuOpen="getMenuOpen"></Navbar>
    <router-view @search="getSearch" :menuOpens="menuOpens" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      search: false,
      menuOpens: false
    };
  },
  methods: {
    getSearch(val) {
      this.search = val;
    },
    getMenuOpen(val) {
      console.log(val);

      this.menuOpens = val;
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
