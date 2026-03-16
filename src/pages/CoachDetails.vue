<script>
import { mapState } from "vuex";
import BaseBadge from "@/components/ui/BaseBadge.vue";

export default {
  name: "CoachDetails",
  components: { BaseBadge },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    ...mapState("coaches", ["coaches"]),
  },
  created() {
    this.selectedCoach = this.coaches.find(({ id }) => id === this.id);
  },
};
</script>

<template>
  <div>
    <v-card-base max-width="720" class="mx-auto mb-4">
      <h2 class="text-headline-small font-weight-bold mb-2">
        {{ selectedCoach.firstName }} {{ selectedCoach.lastName }}
      </h2>
      <h3 class="text-title-large font-weight-bold">
        ${{ selectedCoach.hourlyRate }}/hours
      </h3>
    </v-card-base>
    <v-card-base max-width="720" class="mx-auto mb-4">
      <h2 class="text-headline-small font-weight-bold mb-2">
        Interested? Reach out now!
      </h2>
      <v-btn-primary
        text="Contact"
        :to="`/coaches/${id}/contact`"
        class="mb-4"
      />
      <router-view />
    </v-card-base>
    <v-card-base max-width="720" class="mx-auto">
      <div class="d-flex ga-1">
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :type="area"
          class="mb-2"
        />
      </div>
      <p class="text-title-medium">{{ selectedCoach.description }}</p>
    </v-card-base>
  </div>
</template>
