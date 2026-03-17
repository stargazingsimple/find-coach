<script>
export default {
  name: "RequestItem",
  props: {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <v-card>
    <template #prepend>
      <div>
        <v-icon icon="mdi-email" class="mr-2" />
        <v-btn
          :ripple="false"
          :href="`mailto:${email}`"
          :text="email"
          class="opacity-100 px-0 text-title-medium font-weight-bold text-primary"
          variant="plain"
        />
      </div>
    </template>
    <v-card-text class="text-title-medium font-weight-bold">
      {{ message }}
    </v-card-text>
  </v-card>
</template>
