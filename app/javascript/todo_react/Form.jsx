import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  handleNewTodoAddition() {
    if(this.input.value !== '') {
      this.props.addTodo(this.input.value);
      this.setState({
        value: ''
      });
      this.input.placeholder = "Add todo here...";
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleNewTodoAddition();
    }
  }
  
  render() {
    return (
      <div id="form">
        <input 
          ref={node => {
            this.input = node;
          }}
          value={this.state.value}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button className="add-todo"
          onClick={this.handleNewTodoAddition}
        > 
          +
        </button> 
      </div>
    );
  }
}

export default Form;
