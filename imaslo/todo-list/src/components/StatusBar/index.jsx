import { Component } from 'react'

import "./styles.scss";

class StatusBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { totalTodo, doneTodo } = this.props;
    
    return (
      <div className={'statusBar-container'}>
        <span className={'statusBar'}>Complete: {doneTodo} / {totalTodo}</span>
      </div>
    )
  }
};

export default StatusBar;