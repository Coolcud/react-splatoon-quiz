import React from 'react';
import './Question.css';
import PropTypes from 'prop-types';

const Question = ({ id, question, options, answer }) => {

};

// Typecheck each prop
Question.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  answer: PropTypes.string.isRequired
};

export default Question;
