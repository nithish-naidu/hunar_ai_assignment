import { AccordionDetails, AccordionSummary, Box, Button } from '@mui/material';
import { useQuestions } from '../../contexts/questions/context';
import {
  QUESTION_ACTIONS,
  selectAllQuestionIds,
} from '../../contexts/questions/reducer';
import Question from './Question';
import { Add, ExpandMore } from '@mui/icons-material';
import { useMemo } from 'react';
import { getRequiredFields } from '../../helper/utils';
import {
  QuestionAccordionStyle,
  QuestionAccordionTitleStyle,
} from '../../styles/components';

const QuestionList = () => {
  const { state, dispatch } = useQuestions();
  const allQuestionIds = selectAllQuestionIds(state);

  // Enable button only if latest question has its requirements met
  const isAddQuestionDisabled = useMemo(() => {
    if (state.allIds.length === 0) return false;

    const lastQuestionId = state.allIds[state.allIds.length - 1];
    const requiredFields = getRequiredFields(state.byId[lastQuestionId]);
    const { formData } = state.byId[lastQuestionId];

    if (requiredFields.some((key) => formData[key]?.length === 0)) {
      return true;
    }

    return false;
  }, [state.allIds, state.byId]);

  const onAddQuestionHandler = () => {
    dispatch({ type: QUESTION_ACTIONS.ADD_QUESTION });
  };

  return (
    <Box sx={{ pb: 12, pt: 12 }}>
      <QuestionAccordionStyle elevation={0} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <QuestionAccordionTitleStyle>
            QUALIFICATION QUESTIONS
          </QuestionAccordionTitleStyle>
        </AccordionSummary>
        <AccordionDetails>
          {allQuestionIds?.map((id, index) => (
            <Question key={id} index={index + 1} id={id} i />
          ))}
          <Box sx={{ mt: allQuestionIds?.length ? 2 : 0 }}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              disabled={isAddQuestionDisabled}
              onClick={onAddQuestionHandler}
            >
              Add Question
            </Button>
          </Box>
        </AccordionDetails>
      </QuestionAccordionStyle>
    </Box>
  );
};

export default QuestionList;
