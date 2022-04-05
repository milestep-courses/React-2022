import { Component } from 'react'

import './styles.scss';

class InputToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLabel: ''
    }
  }

  onChangeInput = (event) => {
    this.setState({todoLabel: event.target.value})
  }
  render() {
    const { addNewTodo } = this.props;
    const { todoLabel} = this.state;
    return (
      <div className={'todo-input-container'}>
        <input onChange={this.onChangeInput} type="text" className={'input-field'} />
        <button className={'input-btn'} onClick={() => addNewTodo(todoLabel)}>Add</button>
      </div>
    )
  }
};

export default InputToDo;