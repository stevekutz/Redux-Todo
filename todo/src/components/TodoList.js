import React from 'react';
import './TodoList.css';

import {connect} from 'react-redux';


class TodoList extends React.Component {
  state = {
    value: '',
    completed: false


  };


  render() {
    return (
      <div>
        <h3> My TodoList !!! </h3>


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
