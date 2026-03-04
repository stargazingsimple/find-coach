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
    <section>
      <v-card-base>
        <h2>{{ selectedCoach.firstName }} {{ selectedCoach.lastName }}</h2>
        <h3>${{ selectedCoach.hourlyRate }}/hours</h3>
      </v-card-base>
    </section>
    <section>
      <v-card-base>
        <header>
          <h2>Interested? Reach out now!</h2>
          <v-btn-primary
            text="Contact"
            :to="`/coaches/${id}/contact`"
            class="mb-2"
          />
        </header>
        <router-view />
      </v-card-base>
    </section>
    <section>
      <v-card-base>
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :type="area"
        />
        <p>{{ selectedCoach.description }}</p>
      </v-card-base>
    </section>
  </div>
</template>
