import { combineReducers } from 'redux';
import activeTerm from './updateTerm';
import updateNavVisibility from './updateNavVisibility';

export default combineReducers({
  activeTerm: activeTerm,
  navigationIsHidden: updateNavVisibility,
});
