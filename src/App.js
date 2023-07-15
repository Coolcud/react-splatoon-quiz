import './App.css';
import QuizContents from './components/QuizContents';
import quizData from '../data/questions.json';

function App() {
  return (
    <main>
      <header className='page-header'>Splatoon Trivia!</header>
      <section className='page-quiz__body'>
        <QuizContents></QuizContents>
      </section>
    </main>
  );
}

export default App;
