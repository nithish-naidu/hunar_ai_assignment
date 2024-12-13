import { FormControl, Select as SelectInput, MenuItem } from '@mui/material';

const Select = ({ question, options = [] }) => {
  return (
    <FormControl fullWidth>
      <h4>{question}</h4>
      <SelectInput>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </SelectInput>
    </FormControl>
  );
};

export default Select;
