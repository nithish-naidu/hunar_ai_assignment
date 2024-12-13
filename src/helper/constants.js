export const QUESTION_TYPES = {
  MCQ: "MCQ",
  FREE_TEXT: "FREE_TEXT",
  YES_NO: "YES_NO",
  IMAGE_BASED: 'IMAGE_BASED'
};

export const QUESTION_TYPE_LABEL = {
  [QUESTION_TYPES.MCQ]: 'Multiple Choice',
  [QUESTION_TYPES.FREE_TEXT]: 'Free Text',
  [QUESTION_TYPES.YES_NO]: 'Yes/No Type',
  [QUESTION_TYPES.IMAGE_BASED]: 'Image Based'
}

export const DEFAULT_FORM_FIELD_ERROR = 'Field validation failed'

export const FALLBACK_IMG_URL =
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Tony-Stark-from-Iron-Man.jpg";
