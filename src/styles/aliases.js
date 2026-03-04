import { VBtn, VCard } from "vuetify/components";

const aliases = {
  aliases: {
    VBtnPrimary: VBtn,
    VBtnSecondary: VBtn,
    VCardBase: VCard,
  },
  defaults: {
    VBtnPrimary: {
      variant: "flat",
      color: "#3a0061",
    },
    VBtnSecondary: {
      variant: "outlined",
      color: "#3a0061",
    },
    VCardBase: {
      variant: "outlined",
      maxWidth: "40rem",
      style:
        "margin: 2rem auto; padding: 1rem; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);",
    },
  },
};

export default aliases;
