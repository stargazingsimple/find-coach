<script>
export default {
  name: "TheHeader",
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
};
</script>

<template>
  <v-app-bar class="px-8" color="primary">
    <v-container class="d-flex align-center">
      <v-app-bar-title>
        <v-btn :ripple="false" to="/" variant="plain" class="opacity-100">
          <template #prepend>
            <v-icon icon="mdi-human-male-board" size="42" color="surface" />
          </template>
          <template #default>
            <h1 class="text-headline-medium text-uppercase">find coach</h1>
          </template>
        </v-btn>
      </v-app-bar-title>
      <div class="d-flex ga-4">
        <v-btn
          v-for="{ path, title } in navigationItems"
          :key="title"
          :to="path"
          :text="title"
          class="text-none"
          slim
        />
      </div>
    </v-container>
  </v-app-bar>
</template>
