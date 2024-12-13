import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import { validateOnChange } from '../../helper/validations';

const AutoCompleteField = ({
  id,
  value,
  label,
  options = [],
  validations = [],
  onChange,
  onError,
  hasError = false,
  helperText = '',
}) => {
  const onChangeHandler = (event, value) => {
    if (onChange) {
      onChange(event, value);
    }

    if (validations?.length && onError) {
      validateOnChange(id, value, validations, onError);
    }
  };

  return (
    <Box sx={{ mb: 1.5 }}>
      <Autocomplete
        id={id}
        value={value}
        multiple
        freeSolo
        options={options}
        onChange={onChangeHandler}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip variant="outlined" label={option} key={key} {...tagProps} />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            error={hasError}
            {...params}
            variant="outlined"
            label={label}
            helperText={helperText}
          />
        )}
      />
    </Box>
  );
};

export default AutoCompleteField;
