import * as Yup from "yup";

export const FORMS = {
  ARTICLE: {
    INIT: {
      title: "",
      description: "",
    },
    SCHEMA: Yup.object().shape({
      title: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required"),
    }),
  },
};
