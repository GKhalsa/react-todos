import React from 'react';
import TodosListHeader from './TodosListHeader';

export default class TodosList extends React.Component {
  render(){
    return (
      <table>
        <TodosListHeader/>
      </table>
    );
  }
}
