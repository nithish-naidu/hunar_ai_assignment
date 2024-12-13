import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import When from '../../wrapper/When';

const OPTIONS = {
  YES: 'Yes',
  No: 'No',
};

const YesNo = ({ question, sub_question = '' }) => {
  const [selected, setSelected] = useState(null);
  return (
    <FormControl fullWidth>
      <h4>{question}</h4>
      <RadioGroup row value={selected} onChange={(_, val) => setSelected(val)}>
        <FormControlLabel
          value={OPTIONS.YES}
          control={<Radio />}
          label={OPTIONS.YES}
        />
        <FormControlLabel
          value={OPTIONS.No}
          control={<Radio />}
          label={OPTIONS.No}
        />
      </RadioGroup>
      <When condition={sub_question && selected === OPTIONS.YES}>
        <TextField
          sx={{ mt: 1 }}
          variant="outlined"
          label={sub_question}
          fullWidth
        />
      </When>
    </FormControl>
  );
};

export default YesNo;
