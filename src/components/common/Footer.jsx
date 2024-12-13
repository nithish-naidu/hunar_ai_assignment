import { Button, Toolbar } from '@mui/material';
import { useQuestions } from '../../contexts/questions/context';
import {
  getFormConfigObject,
  QUESTION_ACTIONS,
} from '../../contexts/questions/reducer';
import { isValidFieldValue } from '../../helper/validations';
import { FooterAppBar } from '../../styles/components';

const Footer = () => {
  const { state, dispatch } = useQuestions();

  const onErrorHandler = (id, fieldId, errorMessage) => {
    dispatch({
      type: QUESTION_ACTIONS.ON_FORM_FIELD_ERROR,
      payload: { id, field: fieldId, error: errorMessage },
    });
  };

  const showFormPreview = (config) => {
    dispatch({
      type: QUESTION_ACTIONS.SET_PREVIEW_FORM_DATA,
      payload: { config },
    });
  };

  const scrollToQuestion = (questionId) => {
    const element = document.querySelector(
      `[data-id="question-${questionId}"]`
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const onSaveHandler = () => {
    const questions = state.allIds;
    // Track first source of error, to scroll into the question for better UX
    let firstQuestionWithError = null;

    // Iterate through all the questions
    for (let i = 0; i < questions.length; i++) {
      const question = state.byId[questions[i]];
      const { formData, hiddenFields } = question;
      const formConfigObj = getFormConfigObject(question.type);

      // Validate each form field in a question
      for (let j = 0; j < formConfigObj?.length; j++) {
        const { id: questionId, validations = [] } = formConfigObj[j];
        const isHidden = hiddenFields[questionId] ?? false;

        // Only perform validations for fields that aren't hidden
        if (!isHidden) {
          const error = isValidFieldValue(formData[questionId], validations);
          onErrorHandler(questions[i], questionId, error === null ? '' : error);

          if (error && firstQuestionWithError === null) {
            firstQuestionWithError = questions[i];
          }
        }
      }

      // Break when first question with validation error is found
      if (firstQuestionWithError !== null) {
        break;
      }
    }

    if (firstQuestionWithError === null) {
      const finalResult = [];
      state.allIds.forEach((question) => {
        finalResult.push({
          id: question,
          answer: '',
          type: state.byId[question]?.type,
          ...state.byId[question]?.formData,
        });
      });
      showFormPreview(finalResult);
    } else {
      scrollToQuestion(firstQuestionWithError);
    }
  };

  return (
    <FooterAppBar
      elevation={0}
      color="default"
      position="fixed"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          disabled={!state.allIds.length}
          onClick={onSaveHandler}
        >
          Save
        </Button>
      </Toolbar>
    </FooterAppBar>
  );
};

export default Footer;
