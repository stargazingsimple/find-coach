<script>
import { mapGetters } from "vuex";
import BaseCard from "@/components/ui/BaseCard.vue";
import RequestItem from "@/components/requests/RequestItem.vue";

export default {
  name: "RequestsList",
  components: { RequestItem, BaseCard },
  computed: {
    ...mapGetters("requests", ["requestsByCoach", "hasRequestsByCoach"]),
  },
};
</script>

<template>
  <section>
    <base-card>
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
    </base-card>
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
