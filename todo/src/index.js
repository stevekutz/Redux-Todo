import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore} from 'redux';       //
import {Provider} from 'react-redux';

import rootReducer from './reducers';

import TodoList from './components/TodoList';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store = {store}>
    <TodoList />
  </Provider>

  , rootElement);

