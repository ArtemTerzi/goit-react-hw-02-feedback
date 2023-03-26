import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = () => {
    const goodPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return !goodPercentage ? 0 : goodPercentage;
  };

  render() {
    return (
      <div>
        <h2> Please leave your feedback</h2>
        {Object.keys(this.state).map(el => (
          <button key={el} onClick={this.handleClick} name={el}>
            {el}
          </button>
        ))}
        <h2> Statistics</h2>
        {Object.keys(this.state).map(el => (
          <p key={el} name={el}>
            {el}: {this.state[el]}
          </p>
        ))}
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
