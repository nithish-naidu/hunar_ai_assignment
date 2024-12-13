import { Box, TextField } from "@mui/material";
import { validateOnChange } from "../../helper/validations";

const InputTextField = ({
  id,
  label,
  value,
  onChange,
  onError,
  hasError = false,
  errorMessage = "",
  validations = [],
  helperText = "",
  fullWidth = true,
}) => {
  const onChangeHandler = (event) => {
    const { id, value } = event.target;

    if (onChange) {
      onChange(event);
    }

    if (validations?.length && onError) {
      validateOnChange(id, value, validations, onError);
    }
  };

  return (
    <Box sx={{mb: 1.5}}>
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={onChangeHandler}
        error={hasError}
        fullWidth={fullWidth}
        helperText={errorMessage ? errorMessage : helperText}
        autoComplete="off"
      />
    </Box>
  );
};

export default InputTextField;
