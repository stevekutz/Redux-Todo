




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

    /*
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {value: action.payload, completed: false, id: Date.now()}
        ]


      };

    */
    default:
      return state;

  }

}

export default reducer;


