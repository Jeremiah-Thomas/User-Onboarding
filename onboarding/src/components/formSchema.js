import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup.string().trim().required("First name is required"),

  last_name: yup.string().trim().required("Last name is required"),

  email: yup
    .string()
    .trim()
    .email("Must be a valid email address")
    .required("Email is required"),

  password: yup.string().trim().required("Password is required"),

  ToS_agreed: yup
    .bool()
    .oneOf([true])
    .required("Must agree to the Terms of Service"),
});

export default formSchema;
