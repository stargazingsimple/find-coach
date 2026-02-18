import { number, object, string, array } from "yup";

const schema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  description: string().required("Description is required"),
  hourlyRate: number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .required("Hourly rate is required")
    .min(1, "Hourly rate must be greater than 0"),
  areas: array().min(1, "Areas are required"),
});

export default schema;
