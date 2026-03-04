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
      const { id, checked } = event.target;
      this.$emit("change-filter", { key: id, value: checked });
    },
  },
};
</script>

<template>
  <v-card-base>
    <slot name="title" />
    <span
      v-for="{ id, label } in filterOptions"
      :key="id"
      class="filter-option"
    >
      <input type="checkbox" :id="id" checked @change="setFilterOption" />
      <label :for="id">{{ label }}</label>
    </span>
  </v-card-base>
</template>

<style scoped>
.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
