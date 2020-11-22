import * as Yup from "yup";

export default {
  SIGN_IN: {
    INIT: {
      email: "",
      password: "",
    },
    SCHEMA: Yup.object().shape({
      email: Yup.string().email().required("This field is required"),
      password: Yup.string().min(8).required("This field is required"),
    }),
  },
  SIGN_UP: {
    INIT: {
      email: "",
    },
    SCHEMA: Yup.object().shape({
      email: Yup.string().email().required("This field is required"),
    }),
  },
  FORGOT: {
    INIT: {
      email: "",
    },
    SCHEMA: Yup.object().shape({
      email: Yup.string().email().required("This field is required"),
    }),
  },
  RESET: {
    INIT: {
      password: "",
      confirmationPassword: "",
    },
    SCHEMA: Yup.object().shape({
      password: Yup.string().min(8).required("This field is required"),
      confirmationPassword: Yup.string()
        .min(8)
        .required("This field is required"),
    }),
  },
  ACTIVATION: {
    INIT: {
      first_name: "",
      last_name: "",
    },
    SCHEMA: Yup.object().shape({
      first_name: Yup.string().required("This field is required"),
      last_name: Yup.string().required("This field is required"),
    }),
  },
};
