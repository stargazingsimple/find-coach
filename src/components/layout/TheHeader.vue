<script>
import { mapGetters } from "vuex";
import TheAvatar from "@/components/layout/TheAvatar.vue";

export default {
  name: "TheHeader",
  components: { TheAvatar },
  data() {
    return {
      navigationItems: [
        {
          path: "/coaches",
          title: "All Coaches",
        },
        {
          path: "/requests",
          title: "Requests",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("coaches", ["isCoach"]),
    navigationItemsWithPermission() {
      return this.navigationItems.map((item) => ({
        ...item,
        permission: item.path === "/coaches" || this.isCoach,
      }));
    },
  },
};
</script>

<template>
  <v-app-bar class="px-8" color="primary">
    <v-container class="d-flex align-center">
      <v-app-bar-title>
        <v-btn :ripple="false" to="/" variant="plain" class="opacity-100 px-1">
          <template #prepend>
            <v-icon icon="mdi-human-male-board" size="42" color="surface" />
          </template>
          <template #default>
            <h1 class="text-headline-medium text-uppercase">find coach</h1>
          </template>
        </v-btn>
      </v-app-bar-title>
      <div class="d-flex ga-4 mr-4">
        <template
          v-for="{ path, title, permission } in navigationItemsWithPermission"
          :key="title"
        >
          <v-btn
            v-if="permission"
            :to="path"
            :text="title"
            class="text-none"
            slim
          />
        </template>
      </div>
      <the-avatar />
    </v-container>
  </v-app-bar>
</template>
