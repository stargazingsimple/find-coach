<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <v-card-base>
    <v-empty-state
      icon="mdi-file-remove-outline"
      headline="Page not found"
      title="We can't seem to find the page you're looking for"
      text="Check the URL or return to the homepage"
      action-text="Return"
      to="/coaches"
    />
  </v-card-base>
</template>
