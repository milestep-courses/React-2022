import { Component } from 'react';

import './styles.scss';

class ToDoItem extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const {label, id, deleteTodo, statusTodo, status} = this.props;
    return (
      <div className={'todo-item'}>
        <span className={status ? ('todo-label active') : 'todo-label'}>{label}</span>
        <div className={'btn-group'}>
          <button className={'todo-btn status'} onClick={() => statusTodo(id)}>Done</button>
          <button className={'todo-btn delete'} onClick={() => deleteTodo(id)}>Delete</button>
        </div>
      </div>
    );
  }
};

export default ToDoItem;