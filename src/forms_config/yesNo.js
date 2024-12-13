import { VALIDATION_TYPE } from '../helper/validations';

const yesNoFormConfig = [
  {
    id: 'question',
    label: 'Add your question here *',
    helperText:
      "'YES' the qualifying answer in this type of question and it is always accompanied by a sub question",
    validations: [
      { type: VALIDATION_TYPE.REQUIRED, message: 'Field is required' },
    ],
  },
  {
    id: 'sub_question',
    isSubQuestion: true,
    label: 'Add your question here *',
    helperText: '',
    validations: [
      { type: VALIDATION_TYPE.REQUIRED, message: 'Field is required' },
    ],
  },
];

export default yesNoFormConfig;
