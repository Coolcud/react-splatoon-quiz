import React, { useState } from 'react';

const DEFAULT_SCORING = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

const Quiz = () => {
	const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [result, setResult] = useState(DEFAULT_SCORING);

  return (
    <h1>Quiz</h1>
  );
};

export default Quiz;