import { DEFAULT_FORM_FIELD_ERROR } from "./constants";

export const VALIDATION_TYPE = {
  REQUIRED: "REQUIRED",
  MIN_LENGTH: "MIN_LENGTH",
};

// Validate a value against a list of its validations
export const isValidFieldValue = (value, validations) => {
  for (let i = 0; i < validations.length; i++) {
    const { type, value: validationValue, message = DEFAULT_FORM_FIELD_ERROR } = validations[i];
    if (type === VALIDATION_TYPE.REQUIRED) {
      if (value === null || String(value).trim().length < 1) {
        return message;
      }
    } else if (type === VALIDATION_TYPE.MIN_LENGTH) {
      if (value?.length < validationValue) {
        return message;
      }
    }
  }
  return null;
};

// Perform validaiton on a form field
export const validateOnChange = (id, value, validations, onError) => {
  const validationErrorMessage = isValidFieldValue(value, validations);
  onError(id, validationErrorMessage === null ? "" : validationErrorMessage);
};
