import { Box, Button } from "@mui/material";
import { useQuestions } from "../../contexts/questions/context";
import { QUESTION_ACTIONS } from "../../contexts/questions/reducer";
import AddIcon from "@mui/icons-material/Add";

import formConfigObj from "../../forms_config/yesNo";
import InputTextField from "../fields/InputTextField";
import When from "../wrapper/When";
import QuestionWrapper from "../wrapper/Question";

const YesNoForm = ({ id }) => {
  const { state, dispatch } = useQuestions();
  const { formData, errorFormData, hiddenFields = {} } = state.byId[id];

  const showSubQuestion = !(hiddenFields[formConfigObj[1].id] ?? false);

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

  const toggleSubQuestion = () => {
    dispatch({
      type: QUESTION_ACTIONS.TOGGLE_SUB_QUESTION,
      payload: { id, field: formConfigObj[1].id },
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
        errorMessage={errorFormData[formConfigObj[0].id]}
        helperText={formConfigObj[0].helperText}
      />

      <When condition={showSubQuestion}>
        <QuestionWrapper
          questionId={1}
          isSubQuestion
          onDelete={toggleSubQuestion}
        >
          <InputTextField
            id={formConfigObj[1].id}
            label={formConfigObj[1].label}
            validations={formConfigObj[1].validations}
            value={formData[formConfigObj[1].id]}
            onChange={onChangeHandler}
            onError={onErrorHandler}
            hasError={Boolean(errorFormData[formConfigObj[1].id])}
            errorMessage={errorFormData[formConfigObj[1].id]}
            helperText={formConfigObj[1].helperText}
          />
        </QuestionWrapper>
      </When>

      <When condition={!showSubQuestion}>
        <Button
          startIcon={<AddIcon />}
          disabled={!formData[formConfigObj[0].id]?.length}
          onClick={toggleSubQuestion}
        >
          Add Sub Question
        </Button>
      </When>
    </Box>
  );
};

export default YesNoForm;
