import React, { Component } from 'react';
import { MainContainer } from './FeedbackCounter.styled';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

class FeedbackCounter extends Component {
  //   static defaultProps = {
  //     goodInitialValue: 0,
  //     badInitialValue: 0,
  //     neutralInitialValue: 0,
  //   };

  //   state = {
  //     good: this.props.goodInitialValue,
  //     neutral: this.props.neutralInitialValue,
  //     bad: this.props.badInitialValue,
  //   };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    this.setState(prev => {
      const target = evt.target.textContent;
      return {
        [target]: prev[target] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const newTotal = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    // const total = this.state.good + this.state.neutral + this.state.bad;
    return newTotal;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      +((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) || 0;

    return positivePercentage;
  };

  render() {
    return (
      <MainContainer>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </MainContainer>
    );
  }
}

export default FeedbackCounter;
