import {ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED} from "../actions";


const initialState = {
  todos:
    [
      {
        value: 'build reducer',
        completed: false,
        id: 1,
      },
      {
        value: 'make containers',
        completed: false,
        id: 2,
      },
  ]
};


function reducer (state = initialState, action ) {

  switch(action.type) {


    case ADD_TODO:

      if(action.payload) {    // do NOT add empty todo !!!
        return {
          ...state,
          todos: [
            ...state.todos,
            {value: action.payload, completed: false, id: Date.now()}
          ]
        };
     }


    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todoTask => {
          if (todoTask.id === action.payload) {
            return {
              ...todoTask,
              completed: !todoTask.completed
            };
          } else {
            return todoTask;
          }

        })};

    case CLEAR_COMPLETED:
      console.log("CLEAR called");
      return {
     // ...state,
        todos: state.todos.filter(todoItem => todoItem.completed === false)
      };


    default:
      return state;

  }

}

export default reducer;


