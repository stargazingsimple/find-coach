import { object, string } from "yup";

const schema = object({
  email: string().email("Enter a valid email").required("Email is required"),
  password: string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export default schema;
