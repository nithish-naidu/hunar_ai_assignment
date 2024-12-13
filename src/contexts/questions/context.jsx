import { createContext, useContext, useReducer } from "react";
import questionsReducer from "./reducer";

const initState = {
  byId: {},
  allIds: [],
  previewForm: [],
};

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionsReducer, initState);

  return (
    <QuestionsContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionsContext);
