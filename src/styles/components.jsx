import { SubdirectoryArrowRight } from "@mui/icons-material";
import { Accordion, AppBar, styled, Typography } from "@mui/material";

/* Header */
export const HeaderAppBar = styled(AppBar)({
  background: "#FFF",
  color: "#000",
  borderBottom: "1px solid #EEE",
  "& .MuiToolbar-root": {
    minHeight: "72px"
  }
});

export const HeaderTitle = styled(Typography)({
  color: "#000",
  fontWeight: "bold",
  lineHeight: "16px",
  fontSize: "20px"
});

/* Questions Accordian */
export const QuestionAccordionStyle = styled(Accordion)({
  border: "1px solid #E0E0E0"
});

export const QuestionAccordionTitleStyle = styled(Typography)({
  color: "#757575",
  fontWeight: "bold",
  lineHeight: "24px",
  fontSize: "16px"
});

/* Question */
export const QuestionTitleStyle = styled(Typography)({
  color: "#212121",
  fontWeight: "bold",
  lineHeight: "24px",
  fontSize: "16px"
});

/* Sub Question */
export const SubQuestionIcon = styled(SubdirectoryArrowRight)({
  color: "#9E9E9E"
});


/* Footer */
export const FooterAppBar = styled(AppBar)({
  background: "#FFF",
  borderTop: "1px solid #EEE",
  "& .MuiToolbar-root": {
    minHeight: "68px"
  }
});
