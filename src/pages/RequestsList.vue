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
  <v-card-base max-width="720" class="mx-auto">
    <div v-if="hasRequestsByCoach">
      <h2 class="text-headline-small font-weight-bold text-center mb-4">
        Requests List
      </h2>
      <div class="d-flex flex-column ga-4">
        <request-item
          v-for="{ id, email, message } in requestsByCoach"
          :key="id"
          :email="email"
          :message="message"
        />
      </div>
    </div>
    <v-empty-state
      v-else
      icon="mdi-handshake-outline"
      headline="No requests yet"
      title="No collaboration requests available"
      text="Collaboration requests will appear here when they are received"
    />
  </v-card-base>
</template>
