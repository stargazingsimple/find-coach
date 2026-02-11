<script>
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  name: "BaseCheckboxFilter",
  components: { BaseCard },
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
  <base-card>
    <slot name="title" />
    <span
      v-for="{ id, label } in filterOptions"
      :key="id"
      class="filter-option"
    >
      <input type="checkbox" :id="id" checked @change="setFilterOption" />
      <label :for="id">{{ label }}</label>
    </span>
  </base-card>
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
