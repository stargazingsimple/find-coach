<script>
import { mapActions } from "vuex";
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  name: "CoachRegistration",
  components: { BaseCard, BaseForm },
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
  methods: {
    ...mapActions("coaches", ["addCoach"]),
    onAddCoach(coach) {
      this.addCoach(coach);
      this.$router.replace({ name: "coaches" });
    },
  },
};
</script>

<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <base-form
        :fields="fields"
        submit-button-text="Register!"
        @submit="onAddCoach"
      />
    </base-card>
  </section>
</template>
