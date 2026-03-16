<script>
import { mapActions } from "vuex";
import toast from "@/plugins/toast";
import validationSchema from "@/utils/validation/schemas/coach.js";
import BaseForm from "@/components/ui/BaseForm.vue";

export default {
  name: "CoachRegistration",
  components: { BaseForm },
  data() {
    return {
      fields: [
        { type: "text", id: "firstName", label: "Firstname" },
        { type: "text", id: "lastName", label: "Lastname" },
        { type: "textarea", id: "description", label: "Description" },
        { type: "number", id: "hourlyRate", label: "Hourly rate" },
        {
          type: "options",
          id: "areas",
          label: "Areas of Expertise",
          options: [
            {
              id: "frontend",
              label: "Frontend Development",
              value: "frontend",
            },
            {
              id: "backend",
              label: "Backend Development",
              value: "backend",
            },
            {
              id: "career",
              label: "Career Advisory",
              value: "career",
            },
          ],
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
    ...mapActions("coaches", ["addCoach"]),
    async onAddCoach(coach) {
      const res = await this.addCoach(coach);
      if (!res) return;

      this.$router.replace({ name: "coaches" });
      toast.success("Coach registered successfully");
    },
  },
};
</script>

<template>
  <v-card-base max-width="720" class="mx-auto">
    <h2 class="text-headline-small font-weight-bold mb-4">
      Register as a coach now!
    </h2>
    <base-form
      :fields="fields"
      :validation-schema="validationSchema"
      submit-button-text="Register!"
      @submit="onAddCoach"
    />
  </v-card-base>
</template>
