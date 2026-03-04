import "vuetify/styles";
import "@/styles/fonts.css";
import theme from "@/styles/theme";
import aliases from "@/styles/aliases";
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
