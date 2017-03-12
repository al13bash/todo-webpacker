import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Title from './Title.jsx'
import Form from './Form.jsx'
import List from './List.jsx'

class Container extends React.Component {
  constructor(props) {
    super(props);

    const introData = [
      {
        id: -2, 
        value: "Hi! This is a simple todo list app made by REACT <3"
      },
      {
        id: -1,
        value: "Add new todos and come back any time later, I will save them for you!"
      }
    ];
    
    const localData = localStorage.todos && JSON.parse(localStorage.todos);

    this.state = { 
      data: localData || introData
    };
    
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  updateLocalStorage() {
    if (typeof(Storage) !== "undefined")
      localStorage.todos = JSON.stringify(this.state.data);
  }

  addTodo(val) {
    let id;

    if (typeof(Storage) !== "undefined") {
      id = Number(localStorage.count);
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      id = window.id++;
    }
    
    const todo = { 
      value: val, 
      id: id,
      done: false 
    };
    
    this.state.data.push(todo);
    this.setState({
      data: this.state.data
    }, () => {
      this.updateLocalStorage();
    });
  }

  removeTodo(id) {
    const list = this.state.data.filter(todo => {
      if (todo.id !== id)
        return todo;
    });
    this.setState({
      data: list
    }, () => {
      this.updateLocalStorage();
    });
  }
  
  componentDidMount() {
    localStorage.clear();
    if (typeof(Storage) !== "undefined") {
      if(!localStorage.todos) {
        localStorage.todos = JSON.stringify(this.state.data);
      }
      if(!localStorage.count) {
        localStorage.count = 0;
      }

    } else {
       console.log("%cApp will not remember todos created as LocalStorage Is Not Available",
               "color: hotpink; background: #333; font-size: x-large;font-family: Courier;");
      window.id = 0;
    }
  }
  
  render() {
    return (
      <div id="container">
        <Title />
        <Form addTodo={this.addTodo} />
        <List todos={this.state.data} remove={this.removeTodo} />
      </div>
    );
  }
}

export default Container;
