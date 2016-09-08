import React from 'react';

export default class CreateTodos extends React.Component {
  render(){
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need todo?" ref="createInput"/>
        <button>Create</button>
      </form>
    );
  }

  handleCreate(event){
    event.preventDefault()
    let todo = this.refs.createInput.value
    this.props.createTodos(todo)
    this.refs.createInput.value = '';
  }
}
