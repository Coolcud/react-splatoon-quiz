import './App.css';
import QuestionList from './components/QuestionList';
import quizData from '../data/questions.json';

function App() {
  return (
    <main>
      <header className='page-header'>Splatoon Trivia!</header>
      <section className='page-quiz__body'>
        <QuestionList></QuestionList>
      </section>
    </main>
  );
}

export default App;
