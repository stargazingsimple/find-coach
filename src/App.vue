<template>
  <v-app>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular color="primary" size="64" indeterminate />
    </v-overlay>
    <component :is="layout" />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheMainLayout from "@/components/layout/TheMainLayout.vue";
import TheAuthLayout from "@/components/layout/TheAuthLayout.vue";

export default {
  name: "App",
  computed: {
    ...mapGetters("loader", ["isLoading"]),
    ...mapGetters("auth", ["isAuthenticated"]),
    layout() {
      return this.$route.meta.layout === "main" ? TheMainLayout : TheAuthLayout;
    },
  },
  watch: {
    isAuthenticated(value) {
      if (!value) {
        this.$router.replace({ name: "sign-in" });
      }
    },
  },
  created() {
    this.autologin();
  },
  methods: {
    ...mapActions("auth", ["autologin"]),
  },
};
</script>
