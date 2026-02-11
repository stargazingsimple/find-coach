<script>
import { mapGetters, mapState } from "vuex";
import CoachItem from "@/components/coaches/CoachItem.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  name: "CoachesList",
  components: { BaseButton, CoachItem, BaseCard },
  computed: {
    ...mapState("coaches", ["coaches"]),
    ...mapGetters("coaches", ["hasCoaches"]),
  },
};
</script>

<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link path="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="{ id, firstName, lastName, areas, hourlyRate } in coaches"
          :key="id"
          :id="id"
          :first-name="firstName"
          :last-name="lastName"
          :areas="areas"
          :hourly-rate="hourlyRate"
        />
      </ul>
      <h3 v-else>Empty data</h3>
    </base-card>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
