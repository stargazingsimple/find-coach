<script>
import { mapActions } from "vuex";
import validationSchema from "@/utils/validation/schemas/signUp";
import BaseForm from "@/components/ui/BaseForm.vue";

export default {
  name: "SignUp",
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
          type: "text",
          id: "fullName",
          label: "Full name",
        },
        {
          type: "password",
          id: "password",
          label: "Password",
        },
        {
          type: "passwordConfirm",
          id: "passwordConfirm",
          label: "Password confirm",
        },
        {
          type: "tel",
          id: "phoneNumber",
          label: "Phone",
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
    ...mapActions("auth", ["signUp"]),
    async submit(formData) {
      const res = await this.signUp(formData);
      if (res) {
        this.$router.replace({ name: "sign-in" });
      }
    },
  },
};
</script>

<template>
  <v-card-base max-width="480">
    <h1
      class="text-headline-medium text-uppercase font-weight-bold text-center mb-4"
    >
      register
    </h1>
    <base-form
      :validation-schema="validationSchema"
      :fields="fields"
      submit-button-text="register"
      class="mb-8"
      @submit="submit"
    />
    <p class="text-title-medium text-center">Already have an account?</p>
    <v-btn
      variant="plain"
      color="primary"
      class="text-uppercase text-title-medium d-block mx-auto"
      text="sign in"
      to="/auth/sign-in"
    />
  </v-card-base>
</template>
