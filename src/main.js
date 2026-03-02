import { createApp } from "vue";
import router from "@/router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount("#app");
