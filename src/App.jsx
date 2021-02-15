import React, { Component } from 'react';
import Counter from './03/Counter';
import ListExample from './03/ListExample';
import NewCounter from './03/NewCounter';
import Todolist from './03/Todolist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({
      count: count + 10,
    }));
  }

  render() {
    return (
      <div>
        <Todolist />
      </div>
    );
  }
}

export default App;
