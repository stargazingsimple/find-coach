<script>
import { mapActions } from "vuex";
import validationSchema from "@/utils/validation/schemas/contact.js";
import BaseForm from "@/components/ui/BaseForm.vue";

export default {
  name: "CoachContact",
  components: { BaseForm },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
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
    ...mapActions("requests", ["addRequest"]),
    onAddRequest(formData) {
      this.addRequest({
        ...formData,
        coachId: this.id,
      });
      this.$router.replace({ name: "coaches" });
    },
  },
};
</script>

<template>
  <base-form
    :validation-schema="validationSchema"
    :fields="fields"
    submit-button-text="Send Message"
    @submit="onAddRequest"
  />
</template>
