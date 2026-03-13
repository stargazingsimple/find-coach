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
  <v-card max-width="344">
    <v-card-text>
      <div class="d-flex align-center justify-space-between mb-2">
        <h3 class="text-title-large">{{ firstName }} {{ lastName }}</h3>
        <v-avatar color="secondary" icon="mdi-account" />
      </div>
      <h4 class="text-title-medium mb-2">$ {{ hourlyRate }}/hour</h4>
      <div class="d-flex justify-end ga-1">
        <base-badge v-for="area in areas" :key="area" :type="area" />
      </div>
    </v-card-text>
    <v-card-actions class="pa-0 ga-0">
      <v-btn
        :to="`/coaches/${id}/contact`"
        rounded="0"
        class="w-50 border-t"
        variant="text"
        text="Contact"
      >
        <template #prepend>
          <v-icon icon="mdi-email" size="small" />
        </template>
      </v-btn>
      <v-divider vertical />
      <v-btn
        :to="`/coaches/${id}`"
        rounded="0"
        class="w-50 border-t"
        variant="text"
        text="View Details"
      >
        <template #prepend>
          <v-icon icon="mdi-information" size="small" />
        </template>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
