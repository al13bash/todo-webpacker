import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo.jsx'

const List = ({todos, remove}) => {
  let allTodos = [];
  
  if(todos.length > 0) {
    allTodos = todos.map(todo => {
      return (<Todo todo={todo} remove={remove} />);
    });
  } 
  else {
    allTodos.push(<h3 id="acu">All caught up !</h3>); 
  }
  
  return (
    <ul id="list">
      {allTodos}
    </ul>
  );
};

export default List;
