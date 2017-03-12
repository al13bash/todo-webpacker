import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.todo.done = !this.props.todo.done;
    this.setState(prevState => ({
      done: !prevState.done
    }));
  }

  render(){
    var classes = classNames({
        'todos': true,
        'done-task': this.props.todo.done
    });

    return (
      <li className={classes} onClick={this.handleClick}> 
        <img src="../../assets/flower.png" className="list-marker"/>
        {this.props.todo.value}
        <img src="../../assets/delete.svg" className="removeBtn" 
          onClick={()=> {this.props.remove(this.props.todo.id)}}/>
      </li>    
  );}
}

export default Todo;
