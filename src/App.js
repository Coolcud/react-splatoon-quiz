import './App.css';
import QuestionList from './components/QuestionList';
import quizData from './data/questions.json';

function App() {
  return (
    <div id='App'>
      <main>
        <header className='page-header'>Splatoon Trivia!</header>
        <section className='page-quiz__body'>
          <QuestionList questions={quizData}/>
        </section>
      </main>
    </div>
  );
};

export default App;
