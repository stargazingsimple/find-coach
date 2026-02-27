<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CoachItem from "@/components/coaches/CoachItem.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCheckboxFilter from "@/components/ui/BaseCheckboxFilter.vue";

export default {
  name: "CoachesList",
  components: {
    BaseCheckboxFilter,
    BaseButton,
    CoachItem,
    BaseCard,
  },
  data() {
    return {
      filterOptions: [
        {
          id: "frontend",
          label: "Frontend",
          value: true,
        },
        {
          id: "backend",
          label: "Backend",
          value: true,
        },
        {
          id: "career",
          label: "Career",
          value: true,
        },
      ],
    };
  },
  computed: {
    ...mapState("coaches", ["coaches"]),
    ...mapGetters("coaches", ["isCoach"]),
    activeFilters() {
      return this.filterOptions.reduce(
        (acc, { id, value }) => (value ? [...acc, id] : acc),
        [],
      );
    },
    filteredCoaches() {
      return this.coaches.filter(({ areas }) => {
        return areas.some((area) => this.activeFilters.includes(area));
      });
    },
    hasCoaches() {
      return this.filteredCoaches.length;
    },
  },
  created() {
    this.fetchCoaches({ forceUpdate: false });
  },
  methods: {
    ...mapActions("coaches", ["getCoaches"]),
    changeFilter({ key, value }) {
      const option = this.filterOptions.find(({ id }) => id === key);

      if (option) {
        option.value = value;
      }
    },
    fetchCoaches(payload) {
      this.getCoaches(payload);
    },
  },
};
</script>

<template>
  <base-checkbox-filter
    :filter-options="filterOptions"
    @change-filter="changeFilter"
  >
    <template #title>
      <h2>Find Your Coach</h2>
    </template>
  </base-checkbox-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button
          mode="outline"
          @click="fetchCoaches({ forceUpdate: true })"
        >
          Refresh
        </base-button>
        <base-button v-if="!isCoach" link path="/register">
          Register as Coach
        </base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="{
            id,
            firstName,
            lastName,
            areas,
            hourlyRate,
          } in filteredCoaches"
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

h2 {
  margin: 0.5rem 0;
}
</style>
