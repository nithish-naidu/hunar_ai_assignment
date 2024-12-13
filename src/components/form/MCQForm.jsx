import { Box } from '@mui/material';
import InputTextField from '../fields/InputTextField';
import formConfigObj from '../../forms_config/multipleChoice';
import { useQuestions } from '../../contexts/questions/context';
import { QUESTION_ACTIONS } from '../../contexts/questions/reducer';
import AutoCompleteField from '../fields/AutoCompleteField';
import MultiSelectField from '../fields/MultiSelectField';

const MCQForm = ({ id }) => {
  const { state, dispatch } = useQuestions();
  const { formData, errorFormData } = state.byId[id];

  const onChangeHandler = (event, value) => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_CHANGE,
      payload: {
        id,
        field: event.target.id,
        newValue: value || event.target.value,
      },
    });

    // Reset preferred_options when there's change in options
    if (event.target.id === formConfigObj[1].id) {
      dispatch({
        type: QUESTION_ACTIONS.ON_FORM_FIELD_CHANGE,
        payload: {
          id,
          field: formConfigObj[2].id,
          newValue: [],
        },
      });
    }
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

      <AutoCompleteField
        id={formConfigObj[1].id}
        label={formConfigObj[1].label}
        validations={formConfigObj[1].validations}
        value={formData[formConfigObj[1].id]}
        onChange={onChangeHandler}
        onError={onErrorHandler}
        hasError={Boolean(errorFormData[formConfigObj[1].id])}
        helperText={
          errorFormData[formConfigObj[1].id]
            ? errorFormData[formConfigObj[1].id]
            : formConfigObj[1].helperText
        }
      />

      <MultiSelectField
        id={formConfigObj[2].id}
        label={formConfigObj[2].label}
        validations={formConfigObj[2].validations}
        value={formData[formConfigObj[2].id]}
        options={formData[formConfigObj[1].id]}
        onChange={onChangeHandler}
        onError={onErrorHandler}
        hasError={Boolean(errorFormData[formConfigObj[2].id])}
        helperText={
          errorFormData[formConfigObj[2].id]
            ? errorFormData[formConfigObj[2].id]
            : formConfigObj[2].helperText
        }
      />
    </Box>
  );
};

export default MCQForm;
