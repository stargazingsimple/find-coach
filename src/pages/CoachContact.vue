<script>
import validationSchema from "@/utils/validation/schemas/contact.js";
import BaseForm from "@/components/ui/BaseForm.vue";

export default {
  name: "CoachContact",
  components: { BaseForm },
  data() {
    return {
      fields: [
        {
          type: "email",
          id: "email",
          label: "Your Email",
        },
        {
          type: "textarea",
          id: "message",
          label: "Message",
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
    contact(formData) {
      console.log(formData);
    },
  },
};
</script>

<template>
  <base-form
    :validation-schema="validationSchema"
    :fields="fields"
    submit-button-text="Send Message"
    @submit="contact"
  />
</template>
