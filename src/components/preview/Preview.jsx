import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import When from "../wrapper/When";
import { QUESTION_TYPES } from "../../helper/constants";
import FreeText from "./fields/FreeText";
import Select from "./fields/Select";
import YesNo from "./fields/YesNo";
import ImageBased from "./fields/ImageBased";
import { useQuestions } from "../../contexts/questions/context";
import { QUESTION_ACTIONS } from "../../contexts/questions/reducer";

const Preview = () => {
  const { state, dispatch } = useQuestions();
  const data = state?.previewForm;

  const onCloseHandler = () => {
    dispatch({
      type: QUESTION_ACTIONS.SET_PREVIEW_FORM_DATA,
      payload: { config: [] },
    });
  };

  return (
    <Dialog
      open={Boolean(data?.length)}
      fullWidth
      maxWidth="lg"
      onClose={onCloseHandler}
    >
      <DialogTitle>Form Preview</DialogTitle>
      <DialogContent dividers>
        {data.map((question) => (
          <Box key={question.id} sx={{ mb: 4 }}>
            <When condition={question.type === QUESTION_TYPES.FREE_TEXT}>
              <FreeText {...question} />
            </When>
            <When condition={question.type === QUESTION_TYPES.MCQ}>
              <Select {...question} />
            </When>
            <When condition={question.type === QUESTION_TYPES.YES_NO}>
              <YesNo {...question} />
            </When>
            <When condition={question.type === QUESTION_TYPES.IMAGE_BASED}>
              <ImageBased {...question} />
            </When>
          </Box>
        ))}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onCloseHandler}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Preview;
