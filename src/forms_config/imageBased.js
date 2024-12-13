import { VALIDATION_TYPE } from "../helper/validations";

const imageBasedFormConfig = [
  {
    id: "image_url",
    label: "Upload a Photo (PNG, JPEG, JPG) *",
    default: null,
    helperText: "",
    validations: [{ type: VALIDATION_TYPE.REQUIRED }],
  },
  {
    id: "image_description",
    label: "Add Description for the Photo here",
    helperText:
      "This will be shown along with the photo before the question is asked to the candidate",
    validations: [],
  },
  {
    id: "question",
    label: "Add your question here *",
    helperText: "",
    validations: [{ type: VALIDATION_TYPE.REQUIRED }],
  },
];

export default imageBasedFormConfig;
