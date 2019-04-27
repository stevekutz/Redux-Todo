import React from 'react';
import './TodoList.css';

import {connect} from 'react-redux';


class TodoList extends React.Component {
  state = {
    newTodo: '',
    completed: false,
    id: '',

  };


  render() {
    return (
      <div>
        <h3> {this.props.titleProp} </h3>

        {this.props.todosAsProps &&
          this.props.todosAsProps.map ((todo, index) => (
            <h4 key = {todo.id}>{todo.value}{todo.completed.toString()}</h4>

          ))}


       <form onSubmit = {this.handleSubmit}>
         <input
           type = 'text'
           value = {this.state.newValue}
           onChange = {this.hanldeChange}
           placeholder = 'add a todo here'
           name = "newTodo"

           />





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
  {}


)(TodoList);
