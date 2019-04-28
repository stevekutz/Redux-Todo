import {combineReducers} from 'redux';
import {spreadReducer} from './spreadReducers';
 import {objectAssignReducers as OAreducers} from './objectAssignReducers';
//import {objectAssignReducers} from './objectAssignReducers';


export default combineReducers({
  spreadReducer,
  OAreducers
});