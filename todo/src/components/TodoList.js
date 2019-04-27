import React from 'react';
import './TodoList.css';

import {connect} from 'react-redux';
import {addTodo, toggleTodo} from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: '',
    completed: false,
    id: '',

  };


  // set up for adding another input field...
  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState(
      {
        newTodo: '',
        completed: false,
        id: '',
      }
    );
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);

  };



  render() {
    return (
      <div>
        <h3> {this.props.titleProp} </h3>

        {this.props.todosAsProps &&
          this.props.todosAsProps.map ((todo, index) => (
            <h4
              key = {todo.id}
              onClick = { () => this.handleToggleTodo(todo.id)}



            >{todo.value}</h4>

          ))}


       <form onSubmit = {this.handleSubmit}>
         <input
           type = 'text'
           value = {this.state.newTodo}
           onChange = {this.handleChange}
           placeholder = 'add a todo here'
           name = "newTodo"

           />
          <button>Add Todo</button>

       </form>

      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    todosAsProps: state.todos

  };
};

export default connect (
  mapStateToProps,
  {addTodo, toggleTodo}


)(TodoList);
