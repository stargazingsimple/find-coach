import { VBtn } from "vuetify/components";

const aliases = {
  aliases: {
    VBtnPrimary: VBtn,
    VBtnSecondary: VBtn,
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
  },
};

export default aliases;
