import React, { useState, useEffect } from 'react';
import { MainContainer } from './FeedbackCounter.styled';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

const FeedbackCounter = () => {
  // const [state, dispatch] = useReducer(reducer,initialState,init)

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const feedbackOptionsNames = { good, bad, neutral };

  const handleIncrement = ({ target }) => {
    switch (target.name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    setTotal(good + bad + neutral);
    setPositive(+((good / total) * 100).toFixed(2) || 0);
  }, [good, bad, neutral, total]);
  // useEffect(() => {
  //   setPositive(+((good / total) * 100).toFixed(2) || 0);
  // }, [good, total]);

  return (
    <MainContainer>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={handleIncrement}
          options={Object.keys(feedbackOptionsNames)}
        />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            positivePercentage={positive}
            total={total}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </MainContainer>
  );
};

export default FeedbackCounter;

// function conutReducer(prevState, action) {
//   switch (action.type) {
//     case 'increment':
//       return prevState + action.payload;

//     case 'decrement':
//       return prevState - action.payload;

//     default:
//       return prevState;
//   }
// }
// const [state, dispatch] = useReducer(conutReducer, 0);

// <button
//         type="button"
//         onClick={() => dispatch({ type: 'increment', payload: 1 })}
//         value={state}
//       >
//         {state}
//       </button>
//       <button
//         type="button"
//         onClick={() => dispatch({ type: 'decrement', payload: 1 })}
//         value={state}
//       >
//         {state}
//       </button>
