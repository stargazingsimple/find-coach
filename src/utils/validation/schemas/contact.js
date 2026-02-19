import { object, string } from "yup";

const schema = object({
  email: string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  message: string().required("Message is required"),
});

export default schema;
