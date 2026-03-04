<script>
import { mapState } from "vuex";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseBadge from "@/components/ui/BaseBadge.vue";

export default {
  name: "CoachDetails",
  components: { BaseBadge, BaseCard },
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
      <base-card>
        <h2>{{ selectedCoach.firstName }} {{ selectedCoach.lastName }}</h2>
        <h3>${{ selectedCoach.hourlyRate }}/hours</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <v-btn-primary
            text="Contact"
            :to="`/coaches/${id}/contact`"
            class="mb-2"
          />
        </header>
        <router-view />
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :type="area"
        />
        <p>{{ selectedCoach.description }}</p>
      </base-card>
    </section>
  </div>
</template>
