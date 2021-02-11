import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    this.setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading Value: ', this.state.loading);
  }
  render() {
    return (
      <div>
        <h2>Loading... : {String(this.state.loading)}</h2>
        <h2>Result: {this.state.formData}</h2>
      </div>
    );
  }
}

export default StateExample;
