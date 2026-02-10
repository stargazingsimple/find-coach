<script>
import { mapGetters, mapState } from "vuex";
import CoachItem from "@/components/coaches/CoachItem.vue";

export default {
  name: "CoachesList",
  components: { CoachItem },
  computed: {
    ...mapState("coaches", ["coaches"]),
    ...mapGetters("coaches", ["hasCoaches"]),
  },
};
</script>

<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
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
