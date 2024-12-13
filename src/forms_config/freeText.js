import { VALIDATION_TYPE } from "../helper/validations";

const freeTextFormConfig = [
  {
    id: "question",
    label: "Add your question here *",
    default: "",
    validations: [
      { type: VALIDATION_TYPE.REQUIRED, message: "Field is required" },
    ],
  },
];

export default freeTextFormConfig;
