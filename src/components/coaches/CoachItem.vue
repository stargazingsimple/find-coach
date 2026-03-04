<script>
import BaseBadge from "@/components/ui/BaseBadge.vue";

export default {
  name: "CoachItem",
  components: { BaseBadge },
  props: {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    areas: {
      type: Array,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <li>
    <h3>{{ firstName }} {{ lastName }}</h3>
    <h4>$ {{ hourlyRate }}/hour</h4>
    <div class="d-flex ga-1">
      <base-badge v-for="area in areas" :key="area" :type="area" />
    </div>
    <div class="d-flex justify-end ga-2 mt-4">
      <v-btn-secondary text="Contact" :to="`/coaches/${id}/contact`" />
      <v-btn-primary text="View Details" :to="`/coaches/${id}`" />
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}
</style>
