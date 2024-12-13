import { Container, ThemeProvider } from '@mui/material';
import './App.css';
import Footer from './components/common/Footer';
import QuestionList from './components/common/QuestionList';
import { QuestionsProvider } from './contexts/questions/context';
import Header from './components/common/Header';
import Preview from './components/preview/Preview';
import myTheme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <QuestionsProvider>
          <Header title="Create a New Job Query" />
          <QuestionList />
          <Footer />
          <Preview />
        </QuestionsProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
