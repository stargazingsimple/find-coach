<script>
import BaseForm from "@/components/ui/BaseForm.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  name: "CoachRegistration",
  components: { BaseCard, BaseForm },
  data() {
    return {
      fields: [
        { type: "text", id: "first-name", label: "Firstname" },
        { type: "text", id: "last-name", label: "Lastname" },
        { type: "textarea", id: "description", label: "Description" },
        { type: "number", id: "hourly-rate", label: "Hourly rate" },
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
};
</script>

<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <base-form :fields="fields" submit-button-text="Register!" />
    </base-card>
  </section>
</template>
