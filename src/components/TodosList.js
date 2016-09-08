// import _ from 'lodash';
import React from 'react';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

export default class TodosList extends React.Component {

  renderItems(todo, index) {
    return <TodosListItem key={index} {...todo}/>
  }

  render(){
    return (
      <table>
        <TodosListHeader/>
        <tbody>
          {this.props.todos.map(this.renderItems)}
        </tbody>
      </table>
    );
  }

}
