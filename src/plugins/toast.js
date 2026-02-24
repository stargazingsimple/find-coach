import { createToastInterface, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: POSITION.BOTTOM_RIGHT,
};

const toast = createToastInterface(options);

export default toast;
