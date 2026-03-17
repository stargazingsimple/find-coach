import { object, string, ref } from "yup";

const schema = object({
  email: string().email("Enter a valid email").required("Email is required"),
  fullName: string()
    .matches(
      /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ]*(\s[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ]*)+$/u,
      "Please enter your full name as in example: John Johnson (Іван Іващенко)",
    )
    .required("Full name is required"),
  password: string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Password must match")
    .required("Password confirm is required"),
  phoneNumber: string()
    .matches(
      /^(?:\+38)?(0\d{9})$/,
      "Please enter your phone number as in example: +38XXXXXXXXX",
    )
    .required("Phone number is required"),
});

export default schema;
