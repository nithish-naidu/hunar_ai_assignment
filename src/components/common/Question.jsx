import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useQuestions } from '../../contexts/questions/context';
import { QUESTION_TYPE_LABEL, QUESTION_TYPES } from '../../helper/constants';
import { QUESTION_ACTIONS } from '../../contexts/questions/reducer';
import When from '../wrapper/When';
import FreeTextForm from '../form/FreeTextForm';
import { memo } from 'react';
import MCQForm from '../form/MCQForm';
import YesNoForm from '../form/YesNoForm';
import ImageBasedForm from '../form/ImageBasedForm';
import QuestionWrapper from '../wrapper/Question';

const Question = ({ id, index }) => {
  const { state, dispatch } = useQuestions();
  const { type } = state.byId[id];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const onChangeQuestionTypeHandler = (_, value) => {
    dispatch({
      type: QUESTION_ACTIONS.UPDATE_QUESTION_TYPE,
      payload: { id, type: value },
    });
  };

  const onDeleteQuestionHandler = () => {
    dispatch({
      type: QUESTION_ACTIONS.DELETE_QUESTION,
      payload: { id },
    });
  };

  return (
    <QuestionWrapper
      questionId={id}
      index={index}
      onDelete={onDeleteQuestionHandler}
    >
      <FormControl>
        <RadioGroup
          value={type}
          onChange={onChangeQuestionTypeHandler}
          row={!isMobile}
          sx={{ mb: 1.2 }}
        >
          {Object.keys(QUESTION_TYPES).map((questionType) => (
            <FormControlLabel
              key={questionType}
              value={questionType}
              control={<Radio />}
              label={QUESTION_TYPE_LABEL[questionType]}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <When condition={type === QUESTION_TYPES.FREE_TEXT}>
        <FreeTextForm id={id} />
      </When>
      <When condition={type === QUESTION_TYPES.MCQ}>
        <MCQForm id={id} />
      </When>
      <When condition={type === QUESTION_TYPES.YES_NO}>
        <YesNoForm id={id} />
      </When>
      <When condition={type === QUESTION_TYPES.IMAGE_BASED}>
        <ImageBasedForm id={id} />
      </When>
    </QuestionWrapper>
  );
};

export default memo(Question);
