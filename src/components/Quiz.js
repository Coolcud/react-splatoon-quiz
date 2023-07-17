import { useState } from 'react';
import { quiz } from '../data/questions';
import './Quiz.css';

const DEFAULT_SCORING = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

const Quiz = () => {
	const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState(DEFAULT_SCORING);
  const [showResult, setShowResult] = useState(false);
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const { questions } = quiz;
  const { question, options, correctAnswer, image } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
    selectedAnswer
    ? {
      ...prev,
      score: prev.score + 5,
      correctAnswers: prev.correctAnswers + 1
    }
    : {
      ...prev,
      wrongAnswers: prev.wrongAnswers + 1
    }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    };
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    };
  };

  return (
    <section className='quiz-container'>
      {!showResult ? (
        <div>
          <span className='active-question-num'>{addLeadingZero(activeQuestion + 1)}</span>
          <span className='total-question'>/{addLeadingZero(questions.length)}</span>
        </div>
        <div>
          <h2>{question}</h2>
          <img alt='' src={`../images/${image}`}></img>
          <ul>
            {options.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className='flex-right'>
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className='result'>
          <h3>Result</h3>
          <p>Total Questions: <span>{questions.length}</span></p>
          <p>Total Score: <span>{result.score}</span></p>
          <p>Correct Answers: <span>{result.correctAnswers}</span></p>
          <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
        </div>
      )}
    </section>
  );
};

export default Quiz;