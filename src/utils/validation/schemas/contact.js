import { object, string } from "yup";

const schema = object({
  email: string().required("Email is required").email("Email isn't valid"),
  message: string().required("Message is required"),
});

export default schema;
