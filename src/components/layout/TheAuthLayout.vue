<script>
export default {
  name: "TheAuthLayout",
};
</script>

<template>
  <v-main class="bg-white">
    <v-row class="align-center pa-4">
      <v-col cols="12" md="8">
        <v-img src="@/assets/background.png" class="h-screen" />
      </v-col>
      <v-col cols="12" md="4">
        <router-view #default="{ Component }">
          <v-fade-transition hide-on-leave>
            <component :is="Component" class="mx-auto" />
          </v-fade-transition>
        </router-view>
      </v-col>
    </v-row>
  </v-main>
</template>
