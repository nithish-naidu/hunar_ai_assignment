import { Delete } from "@mui/icons-material";
import { Box, IconButton, Paper } from "@mui/material";
import { QuestionTitleStyle, SubQuestionIcon } from "../../styles/components";

const QuestionWrapper = ({
  index=1,
  questionId,
  children,
  onDelete,
  isSubQuestion = false,
}) => {
  return (
    <Paper data-id={`question-${questionId}`} sx={{ mb: 1 }} elevation={0}>
      <Box
        sx={{ py: 1 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" gap={1} alignItems="center">
          {isSubQuestion ? <SubQuestionIcon /> : <></>}
          <QuestionTitleStyle variant="h6">
            {isSubQuestion ? "Sub" : ""} Quesiton {index}
          </QuestionTitleStyle>
        </Box>
        <Box>
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
        </Box>
      </Box>
      {children}
    </Paper>
  );
};

export default QuestionWrapper;
