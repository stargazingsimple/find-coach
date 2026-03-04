<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <section>
    <v-card-base>
      <h2>Page not found</h2>
      <p>
        This page could not be found - maybe check out all our
        <router-link to="/coaches">coaches</router-link>
      </p>
    </v-card-base>
  </section>
</template>
