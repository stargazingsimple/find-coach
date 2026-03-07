import "vuetify/styles";
import "@/styles/main.scss";
import theme from "@/styles/utils/theme";
import aliases from "@/styles/utils/aliases";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "theme",
    themes: {
      theme,
    },
  },
  ...aliases,
});

export default vuetify;
