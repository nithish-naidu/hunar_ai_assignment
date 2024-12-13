import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { validateOnChange } from "../../helper/validations";

const MultiSelectField = ({
  id,
  label,
  value,  
  onChange,
  onError,
  options = [],
  helperText = '',
  hasError = false,
  validations = [],
}) => {
  const onChangeHandler = (event, child) => {
    const {
      target: { value },
    } = event;

    if (onChange) {
      // Mocking event object, since event is generated from MenuItem and not Selec
      // https://mui.com/material-ui/api/select/#select-prop-id
      const mockEvent = { target: { id, value } };
      onChange(mockEvent);
    }

    if (validations?.length && onError) {
      validateOnChange(id, value, validations, onError);
    }
  };

  return (
    <Box sx={{ mb: 1.5 }}>
      <FormControl fullWidth error={hasError}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          id={id}
          labelId={`${id}-label`}
          value={value}
          multiple
          fullWidth
          onChange={onChangeHandler}
          input={<OutlinedInput label={label} fullWidth />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value?.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MultiSelectField;
