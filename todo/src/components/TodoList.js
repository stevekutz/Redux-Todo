import React from 'react';
import './TodoList.css';

import {connect} from 'react-redux';


class TodoList extends React.Component {
  state = {
    value: '',
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
