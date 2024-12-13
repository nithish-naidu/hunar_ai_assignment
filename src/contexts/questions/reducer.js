import freeTextFormConfig from "../../forms_config/freeText";
import imageBasedFormConfig from "../../forms_config/imageBased";
import multipleChoiceFormConfig from "../../forms_config/multipleChoice";
import yesNoFormConfig from "../../forms_config/yesNo";
import { QUESTION_TYPES } from "../../helper/constants";
import { generateRandomID } from "../../helper/utils";

export const QUESTION_ACTIONS = {
  ADD_QUESTION: "ADD_QUESTION",
  DELETE_QUESTION: "DELETE_QUESTION",
  UPDATE_QUESTION_TYPE: "UPDATE_QUESTION_TYPE",
  ON_FORM_FIELD_CHANGE: "ON_FORM_FIELD_CHANGE",
  ON_FORM_FIELD_ERROR: "ON_FORM_FIELD_ERROR",
  TOGGLE_SUB_QUESTION: "TOGGLE_SUB_QUESTION",
  SET_PREVIEW_FORM_DATA: "SET_PREVIEW_FORM_DATA",
};

export const getFormConfigObject = (type) => {
  if (type === QUESTION_TYPES.MCQ) {
    return multipleChoiceFormConfig;
  } else if (type === QUESTION_TYPES.FREE_TEXT) {
    return freeTextFormConfig;
  } else if (type === QUESTION_TYPES.YES_NO) {
    return yesNoFormConfig;
  } else if (type === QUESTION_TYPES.IMAGE_BASED) {
    return imageBasedFormConfig;
  }
};

export const getInitialFormFields = (type) => {
  const formConfigObj = getFormConfigObject(type);
  const formData = {};
  const errorFields = {};
  const hiddenFields = {};

  formConfigObj.forEach((question, index) => {
    const { id, default: defaultValue = "", isSubQuestion = false } = question;

    // Discover potential issues during development
    if (!id)
      throw new Error(
        `Form configuration issue in ${type} form at index: ${index}`
      );

    formData[id] = defaultValue;
    errorFields[id] = "";

    if (isSubQuestion) {
      hiddenFields[id] = true;
    }
  });

  return {
    formData: { ...formData },
    errorFormData: {
      ...errorFields,
    },
    hiddenFields: {
      ...hiddenFields,
    },
  };
};

const questionsReducer = (state, action) => {
  switch (action.type) {
    case QUESTION_ACTIONS.ADD_QUESTION: {
      const newId = generateRandomID();
      return {
        ...state,
        byId: {
          ...state.byId,
          [newId]: {
            type: QUESTION_TYPES.MCQ,
            ...getInitialFormFields(QUESTION_TYPES.MCQ),
          },
        },
        allIds: [...state.allIds, newId],
      };
    }
    case QUESTION_ACTIONS.DELETE_QUESTION: {
      const { id: questionId } = action.payload;
      const { [questionId]: _, ...remainingQuestions } = state.byId;
      return {
        ...state,
        byId: remainingQuestions,
        allIds: state.allIds.filter((qid) => qid !== questionId),
      };
    }
    case QUESTION_ACTIONS.UPDATE_QUESTION_TYPE: {
      const { id, type } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...state.byId[id], type, ...getInitialFormFields(type) },
        },
      };
    }
    case QUESTION_ACTIONS.ON_FORM_FIELD_CHANGE: {
      const { id, field, newValue } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            formData: {
              ...state.byId[id].formData,
              [field]: newValue,
            },
          },
        },
      };
    }
    case QUESTION_ACTIONS.ON_FORM_FIELD_ERROR: {
      const { id, field, error } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            errorFormData: {
              ...state.byId[id].errorFormData,
              [field]: error,
            },
          },
        },
      };
    }
    case QUESTION_ACTIONS.TOGGLE_SUB_QUESTION: {
      const { id, field } = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            formData: {
              ...state.byId[id].formData,
              [field]: "",
            },
            hiddenFields: {
              ...state.byId[id].hiddenFields,
              [field]: !state.byId[id].hiddenFields[field],
            },
          },
        },
      };
    }
    case QUESTION_ACTIONS.SET_PREVIEW_FORM_DATA: {
      const { config = [] } = action.payload;
      return {
        ...state,
        previewForm: config,
      };
    }
    default:
      return state;
  }
};

export default questionsReducer;

export const selectAllQuestionIds = (state) => state?.allIds;
