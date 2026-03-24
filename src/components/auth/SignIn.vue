<script>
import { mapActions } from "vuex";
import validationSchema from "@/utils/validation/schemas/signIn";
import BaseForm from "@/components/ui/BaseForm.vue";

export default {
  name: "SignIn",
  components: { BaseForm },
  data() {
    return {
      fields: [
        {
          type: "email",
          id: "email",
          label: "Email",
        },
        {
          type: "password",
          id: "password",
          label: "Password",
        },
      ],
    };
  },
  computed: {
    validationSchema() {
      return validationSchema;
    },
  },
  methods: {
    ...mapActions("auth", ["signIn"]),
    async submit(formData) {
      const res = await this.signIn(formData);
      if (res) {
        this.$router.replace({ name: "coaches" });
      }
    },
  },
};
</script>

<template>
  <v-card-base max-width="480" class="d-flex flex-column">
    <h1
      class="text-headline-medium text-uppercase font-weight-bold text-center mb-4"
    >
      sign in
    </h1>
    <base-form
      :validation-schema="validationSchema"
      :fields="fields"
      class="mb-8"
      submit-button-text="sign in"
      @submit="submit"
    />
    <p class="text-title-medium text-center">Don't have an account yet?</p>
    <v-btn
      :ripple="false"
      variant="plain"
      color="primary"
      class="text-uppercase text-title-medium"
      text="sign up"
      to="/auth/sign-up"
    />
  </v-card-base>
</template>
