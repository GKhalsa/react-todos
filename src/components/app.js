import React from 'react';
import TodosList from './TodosList';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];

export default class App extends React.Component {
  render(){
    return (
      <div>
        <h1>React Todos App</h1>
        <TodosList/>
      </div>
    );
  }
}
