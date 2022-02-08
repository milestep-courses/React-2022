import { Component } from 'react';

import ToDoItem from '../ToDoItem';

import './styles.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, deleteTodo, statusTodo } = this.props;
    const todoItems = todos.map( ({id, label, isDone}) => {
      return <ToDoItem label={label} id={id} status={isDone} key={id} deleteTodo={deleteTodo} statusTodo={statusTodo}/>
    });

    return (
      <>
        {todoItems}
      </>
    );
  }
};

export default ToDoList;