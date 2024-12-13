import { getFormConfigObject } from "../contexts/questions/reducer";
import { VALIDATION_TYPE } from "./validations";

export const generateRandomID = () =>
  String(Math.ceil(Math.random() * 10000000));

// Extract required fields from a question
export const getRequiredFields = (question) => {
  const { type, hiddenFields = {} } = question;
  const formObj = getFormConfigObject(type);
  const requiredFields = [];

  for (let i = 0; i < formObj.length; i++) {
    // If field is not hidden and has REQUIRED validation
    if (
      hiddenFields[formObj[i].id] !== true &&
      formObj[i].validations.some(
        (validation) => validation.type === VALIDATION_TYPE.REQUIRED
      )
    ) {
      requiredFields.push(formObj[i].id);
    }
  }

  return requiredFields;
};
