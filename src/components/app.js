import React from 'react';
import TodosList from './TodosList';
import CreateTodos from './CreateTodos';

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
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

  render(){
    return (
      <div>
        <h1>React Todos App</h1>
        <CreateTodos createTodos={this.createTodos.bind(this)}/>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }

  createTodos(todo){
    this.state.todos.push({
      task: todo,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
  }
}
