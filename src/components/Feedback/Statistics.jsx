import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <h3>Statistics</h3>
      <div>
        <p>Good : {good} </p>
        <p>Neutral : {neutral} </p>
        <p>Bad : {bad} </p>
        <p>Total : {total} </p>
        <p>Positive feedback : {positivePercentage}%</p>
      </div>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
