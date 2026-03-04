<script>
import { mapActions, mapGetters } from "vuex";
import RequestItem from "@/components/requests/RequestItem.vue";

export default {
  name: "RequestsList",
  components: { RequestItem },
  computed: {
    ...mapGetters("requests", ["requestsByCoach", "hasRequestsByCoach"]),
  },
  created() {
    this.getRequests();
  },
  methods: {
    ...mapActions("requests", ["getRequests"]),
  },
};
</script>

<template>
  <section>
    <v-card-base>
      <header>
        <h2>Requests List</h2>
      </header>
      <ul v-if="hasRequestsByCoach">
        <request-item
          v-for="{ id, email, message } in requestsByCoach"
          :key="id"
          :email="email"
          :message="message"
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </v-card-base>
  </section>
</template>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
