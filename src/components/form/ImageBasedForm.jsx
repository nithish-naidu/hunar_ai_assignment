import { Box, Button, Typography } from '@mui/material';
import InputTextField from '../fields/InputTextField';
import formConfigObj from '../../forms_config/imageBased';
import { useQuestions } from '../../contexts/questions/context';
import { QUESTION_ACTIONS } from '../../contexts/questions/reducer';
import CloseIcon from '@mui/icons-material/Close';
import { validateOnChange } from '../../helper/validations';

const ImageBasedForm = ({ id }) => {
  const { state, dispatch } = useQuestions();
  const { formData, errorFormData } = state.byId[id];
  const isImageUploaded = Boolean(formData[formConfigObj[0].id]);

  const onChangeHandler = (event, value) => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_CHANGE,
      payload: {
        id,
        field: event.target.id,
        newValue: value || event.target.value,
      },
    });
  };

  const onErrorHandler = (fieldId, errorMessage) => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_ERROR,
      payload: { id, field: fieldId, error: errorMessage },
    });
  };

  // Validation for Image field related changes
  const validateOnChangeImage = (value) => {
    validateOnChange(
      formConfigObj[0].id,
      value,
      formConfigObj[0].validations,
      onErrorHandler
    );
  };

  const uploadImageHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      onChangeHandler(event, imageURL);
      validateOnChangeImage(imageURL);
    }
  };

  const removeImageHandler = () => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_CHANGE,
      payload: {
        id,
        field: formConfigObj[0].id,
        newValue: null,
      },
    });
    validateOnChangeImage(null);
    // Reset node value
    document.getElementById(formConfigObj[0].id).value = '';
  };

  return (
    <Box>
      <Box
        sx={{
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          color={Boolean(errorFormData[formConfigObj[0].id]) ? 'red' : ''}
        >
          {formConfigObj[0].label}
        </Typography>
        <Button
          variant="outlined"
          onClick={
            isImageUploaded
              ? () => removeImageHandler()
              : () => document.getElementById(formConfigObj[0].id).click()
          }
          endIcon={isImageUploaded ? <CloseIcon /> : <></>}
        >
          {isImageUploaded ? formData[formConfigObj[0].id] : 'UPLOAD IMAGE'}
        </Button>
        <input
          id={formConfigObj[0].id}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          style={{ display: 'none' }}
          onChange={uploadImageHandler}
        />
      </Box>
      <InputTextField
        id={formConfigObj[1].id}
        label={formConfigObj[1].label}
        validations={formConfigObj[1].validations}
        value={formData[formConfigObj[1].id]}
        onChange={onChangeHandler}
        onError={onErrorHandler}
        hasError={Boolean(errorFormData[formConfigObj[1].id])}
        helperText={formConfigObj[1].helperText}
      />

      <InputTextField
        id={formConfigObj[2].id}
        label={formConfigObj[2].label}
        validations={formConfigObj[2].validations}
        value={formData[formConfigObj[2].id]}
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

export default ImageBasedForm;
