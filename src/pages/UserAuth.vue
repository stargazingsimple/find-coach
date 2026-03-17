<script>
export default {
  name: "UserAuth",
};
</script>

<template>
  <v-row class="bg-white align-center px-4">
    <v-col cols="9">
      <v-img src="@/assets/background.png" />
    </v-col>
    <v-col cols="3">
      <router-view #default="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-col>
  </v-row>
</template>
