<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CoachItem from "@/components/coaches/CoachItem.vue";
import BaseCheckboxFilter from "@/components/ui/BaseCheckboxFilter.vue";

export default {
  name: "CoachesList",
  components: {
    BaseCheckboxFilter,
    CoachItem,
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
    ...mapState("auth", ["userId"]),
    ...mapGetters("coaches", ["isCoach"]),
    activeFilters() {
      return this.filterOptions.reduce(
        (acc, { id, value }) => (value ? [...acc, id] : acc),
        [],
      );
    },
    coachesWithoutCurrentUser() {
      return this.coaches.filter(({ id }) => id !== this.userId);
    },
    filteredCoaches() {
      const coaches = this.isCoach
        ? this.coachesWithoutCurrentUser
        : this.coaches;
      return coaches.filter(({ areas }) => {
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
  <div>
    <base-checkbox-filter
      :filter-options="filterOptions"
      class="mb-4"
      @change-filter="changeFilter"
    >
      <template #title>
        <h2 class="text-headline-small font-weight-bold">Find Your Coach</h2>
      </template>
      <template #actions>
        <div class="d-flex flex-column ga-3">
          <v-btn-secondary
            text="Refresh"
            min-width="150"
            @click="fetchCoaches({ forceUpdate: true })"
          />
          <v-btn-primary
            v-if="!isCoach"
            text="Register as Coach"
            min-width="150"
            to="/register"
          />
        </div>
      </template>
    </base-checkbox-filter>
    <v-card-base>
      <v-row v-if="hasCoaches">
        <v-col
          v-for="{
            id,
            firstName,
            lastName,
            areas,
            hourlyRate,
          } in filteredCoaches"
          :key="id"
          xl="3"
          lg="4"
          md="6"
        >
          <coach-item
            :id="id"
            :first-name="firstName"
            :last-name="lastName"
            :areas="areas"
            :hourly-rate="hourlyRate"
          />
        </v-col>
      </v-row>
      <v-empty-state
        v-else
        icon="mdi-account-off"
        headline="No coaches yet"
        title="Nothing to show here"
        text="Coaches profiles will appear here once they become available"
      />
    </v-card-base>
  </div>
</template>
