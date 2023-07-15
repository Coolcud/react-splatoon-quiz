import './App.css';
import QuestionList from './components/QuestionList';
import quizData from './data/questions.json';
import s3GenericImg from './images/s3-generic.jpg';

function App() {
  return (
    <div id='App'>
      <main>
        <header className='page-header'>
          Splatoon Trivia!
          <img alt='inklings fighting' src={s3GenericImg}/>
        </header>
        <section className='page-quiz__body'>
          <QuestionList questions={quizData}/>
        </section>
      </main>
    </div>
  );
};

export default App;
