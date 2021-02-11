import React, { Component } from 'react';

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? "Let's go" : 'Just work';
    return (
      <div className="message-container">
        <h3>{message}</h3>
      </div>
    );
  }
}

export default BooleanComponent;
