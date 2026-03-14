<script>
export default {
  name: "BaseCheckboxFilter",
  props: {
    filterOptions: {
      type: Array,
      required: true,
    },
  },
  emits: ["change-filter"],
  methods: {
    setFilterOption(event) {
      const { id, checked } = event;
      this.$emit("change-filter", { key: id, value: checked });
    },
  },
};
</script>

<template>
  <v-card-base class="d-flex justify-space-between">
    <div>
      <slot name="title" />
      <div class="d-flex ga-2">
        <v-checkbox
          v-for="{ id, label, value } in filterOptions"
          :key="id"
          :label="label"
          :model-value="value"
          color="primary"
          hide-details
          density="compact"
          @update:model-value="setFilterOption({ id, checked: $event })"
        />
      </div>
    </div>
    <div>
      <slot name="actions" />
    </div>
  </v-card-base>
</template>
