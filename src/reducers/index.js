import { combineReducers } from 'redux';
import activeTerm from './updateTerm';

export default combineReducers({
  activeTerm: activeTerm,
});
