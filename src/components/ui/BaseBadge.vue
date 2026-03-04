<script>
export default {
  name: "BaseBadge",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    title() {
      return this.type.toUpperCase();
    },
    config() {
      switch (this.type) {
        case "frontend":
          return { color: "#3d008d", icon: "mdi-code-block-tags" };
        case "backend":
          return { color: "#71008d", icon: "mdi-language-java" };
        default:
          return { color: "#8d006e", icon: "mdi-account" };
      }
    },
  },
};
</script>

<template>
  <v-chip
    :text="title"
    :color="config.color"
    :prepend-icon="config.icon"
    variant="flat"
  />
</template>
