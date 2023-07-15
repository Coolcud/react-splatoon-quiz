import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';

const Question = ({ id, image, question, options, answer }) => {
  return (
    <div>
      <img></img>
    </div>
  );
};

// Typecheck each prop
Question.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  answer: PropTypes.string.isRequired
};

export default Question;
