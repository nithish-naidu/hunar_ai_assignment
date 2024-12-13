import { VALIDATION_TYPE } from '../helper/validations';

const multipleChoiceFormConfig = [
  {
    id: 'question',
    label: 'Add your question here *',
    helperText: '',
    default: '',
    validations: [
      { type: VALIDATION_TYPE.REQUIRED, message: 'Field is required' },
    ],
  },
  {
    id: 'options',
    label: 'Type Options (Minimum 2) *',
    helperText: 'Type and press enter to create multiple optoins',
    default: [],
    validations: [
      { type: VALIDATION_TYPE.REQUIRED, message: 'Field is required' },
      {
        type: VALIDATION_TYPE.MIN_LENGTH,
        value: 2,
        message: 'Please select atleast 2 options',
      },
    ],
  },
  {
    id: 'preferred_options',
    label: 'Pick Qualifying Answers *',
    helperText: '',
    default: [],
    validations: [{ type: VALIDATION_TYPE.REQUIRED }],
  },
];

export default multipleChoiceFormConfig;
