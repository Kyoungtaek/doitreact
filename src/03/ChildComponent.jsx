import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>boolean: {boolValue}</span>
        <span>Number: {numValue}</span>
        <span>Arry: {arrayValue}</span>
        <span>Node: {nodeValue}</span>
        <span>Func: {funcValue}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
