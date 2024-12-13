import { TextField } from '@mui/material';

const FreeText = ({ question }) => {
  return (
    <>
      <h4>{question}</h4>
      <TextField variant="outlined" fullWidth />
    </>
  );
};

export default FreeText;
