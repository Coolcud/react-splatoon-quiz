import React from 'react';
import './QuestionList.css';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionList = ({ questions }) => {
	// Map each question to Question component
	const quizComponents = questions.map(q => {
		return (
      <Question
        key={q.id}
        id={q.id}
        question={q.question}
        options={q.options}
        answer={q.correctAnswer}
      />
		);
  });

	  // Return all questions to App for rendering
  return (
		<section className='question-list'>{quizComponents}</section>
	);
};

// Typecheck each prop
QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })),
};

export default QuestionList