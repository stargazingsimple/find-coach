import "@/styles/main.scss";
import theme from "@/styles/utils/theme";
import aliases from "@/styles/utils/aliases";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "theme",
    themes: {
      theme,
    },
  },
  ...aliases,
});

export default vuetify;
