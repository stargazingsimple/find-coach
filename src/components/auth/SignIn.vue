<script>
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
    signIn(formData) {
      console.log(formData);
    },
  },
};
</script>

<template>
  <v-card-base>
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
      @submit="signIn"
    />
    <p class="text-title-medium text-center">Don't have an account yet?</p>
    <v-btn
      variant="plain"
      color="primary"
      class="text-uppercase text-title-medium d-block mx-auto"
      text="sign up"
      to="/auth/sign-up"
    />
  </v-card-base>
</template>
