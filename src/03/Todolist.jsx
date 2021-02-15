import React, { Component } from 'react';

class Todolist extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: 'Laundry', finished: false },
      { taskName: 'Study', finished: true },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
