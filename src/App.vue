<template>
  <loading v-model:active="isLoading" color="#3d008d" />
  <the-header />
  <router-view #default="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
