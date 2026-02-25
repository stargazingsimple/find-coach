<template>
  <loading v-model:active="isLoading" color="#3d008d" />
  <the-header />
  <router-view />
</template>

<script>
import "vue-loading-overlay/dist/css/index.css";
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import TheHeader from "@/components/layout/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader, Loading },
  computed: {
    ...mapGetters("loader", ["isLoading"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
