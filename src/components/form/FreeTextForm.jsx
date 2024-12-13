import { Box } from "@mui/material";
import { useQuestions } from "../../contexts/questions/context";
import { QUESTION_ACTIONS } from "../../contexts/questions/reducer";

import formConfigObj from "../../forms_config/freeText";
import InputTextField from "../fields/InputTextField";

const FreeTextForm = ({ id }) => {
  const { state, dispatch } = useQuestions();
  const { formData, errorFormData } = state.byId[id];

  const onChangeHandler = (event) => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_CHANGE,
      payload: { id, field: event.target.id, newValue: event.target.value },
    });
  };

  const onErrorHandler = (fieldId, errorMessage) => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_ERROR,
      payload: { id, field: fieldId, error: errorMessage },
    });
  };

  return (
    <Box>
      <InputTextField
        id={formConfigObj[0].id}
        label={formConfigObj[0].label}
        validations={formConfigObj[0].validations}
        value={formData[formConfigObj[0].id]}
        onChange={onChangeHandler}
        onError={onErrorHandler}
        hasError={Boolean(errorFormData[formConfigObj[0].id])}
        helperText={
          errorFormData[formConfigObj[0].id]
            ? errorFormData[formConfigObj[0].id]
            : formConfigObj[0].helperText
        }
      />
    </Box>
  );
};

export default FreeTextForm;
