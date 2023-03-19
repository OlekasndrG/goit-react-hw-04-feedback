import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
class FeedbackOptions extends Component {
  render() {
    return (
      <div className="Counter__controls">
        {this.props.options.map(button => {
          return (
            <button
              type="button"
              key={nanoid()}
              onClick={this.props.onLeaveFeedback}
            >
              {button}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div className="Counter__controls">
//       <button type="button" onClick={onLeaveFeedback}>
//         good
//       </button>
//       <button type="button" onClick={onLeaveFeedback}>
//         neutral
//       </button>
//       <button type="button" onClick={onLeaveFeedback}>
//         bad
//       </button>
//     </div>
//   );
// };
