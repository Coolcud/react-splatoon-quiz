import './App.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <div id='App'>
      <main>
        <section className='page-quiz__body'>
          <Quiz></Quiz>
        </section>
      </main>
    </div>
  );
};

export default App;
