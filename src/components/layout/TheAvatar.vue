<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TheAvatar",
  computed: {
    ...mapState("auth", ["userData", "userId"]),
    ...mapGetters("coaches", ["isCoach"]),
    userInitials() {
      const fullNameArr = this.userData.fullName.split(" ");
      return `${fullNameArr[0].charAt(0)} ${fullNameArr[1].charAt(0)}`;
    },
  },
  methods: {
    ...mapActions("auth", ["signOut"]),
  },
};
</script>

<template>
  <v-menu v-if="userId" min-width="200px">
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="secondary" size="large">
          <span class="text-headline-small">{{ userInitials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="secondary">
            <span class="text-headline-small">{{ userInitials }}</span>
          </v-avatar>
          <h3 class="my-1">{{ userData.fullName }}</h3>
          <p class="text-body-small mt-1">
            {{ userData.email }}
          </p>
          <v-divider v-if="isCoach" class="my-3" />
          <v-btn
            v-if="isCoach"
            :to="`/coaches/${userId}`"
            variant="text"
            rounded
            text="Coach Profile"
          />
          <v-divider class="my-3" />
          <v-btn variant="text" rounded text="Log Out" @click="signOut" />
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
