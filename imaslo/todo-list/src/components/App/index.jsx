import { Component } from 'react';

import Header from '../Header';
import StatusBar from '../StatusBar';
import InputToDo from '../InputToDo';
import ToDoList from '../ToDoList';

import './styles.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoId: 0,
      totalCounter: 0,
      isDoneCounter: 0
    }

  }

  addNewTodo = (todoValue) => {
    if (todoValue.length > 1) {
      this.getTodoId();
      this.setState(({ todos, todoId }) => {
        const newState = [...todos, { id: todoId, label: todoValue, isDone: false }];
        return { todos: newState }
      })
      this.updateStatus();
    }
  }

  getTodoId = () => {
    this.setState(({ todoId }) => {
      let currentId = ++todoId;
      return { todoId: currentId }
    })
  }

  deleteTodo = (itemId) => {
    this.setState(({ todos }) => ({ todos: todos.filter(item => item.id !== itemId) }))
    this.updateStatus();
  }

  statusTodo = (itemId) => {
    this.setState(({ todos }) => {
      return {
        todos: todos.map(({ id, label, isDone }) => {
          if (id === itemId) {
            isDone = !isDone;
          }
          return { id, label, isDone }
        })
      }
    })
    this.updateStatus();
  }

  updateStatus = () => {
    this.setState(({ todos }) => {

      return {
        totalCounter: todos.length,
        isDoneCounter: todos.filter(item => item.isDone === true).length
      }
    })
  }

  render() {
    const { todos, totalCounter, isDoneCounter } = this.state;
    return (
      <div className={'app'}>
        <Header />
        <StatusBar status={this.updateStatus} totalTodo={totalCounter} doneTodo={isDoneCounter} />
        <InputToDo addNewTodo={this.addNewTodo} getTodoId={this.getTodoId} />
        <ToDoList todos={todos} deleteTodo={this.deleteTodo} statusTodo={this.statusTodo} />
      </div>
    )
  }
}

export default App;