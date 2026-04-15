<script>
import TheHeader from "@/components/navigation/TheHeader.vue";

export default {
  name: "MainLayout",
  components: { TheHeader },
};
</script>

<template>
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
</template>
