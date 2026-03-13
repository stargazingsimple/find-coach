<template>
  <v-app>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular color="primary" size="64" indeterminate />
    </v-overlay>
    <the-header />
    <v-main>
      <v-container>
        <router-view #default="{ Component }">
          <v-fade-transition hide-on-leave>
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/layout/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
  computed: {
    ...mapGetters("loader", ["isLoading"]),
  },
};
</script>
