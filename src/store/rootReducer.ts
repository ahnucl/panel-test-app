import { combineReducers } from 'redux';
import itemsReducer from './ducks/items';
import panelReducer from './ducks/panel';
import typesReducer from './ducks/types';
import statesReducer from './ducks/states';
import transitionsReducer from './ducks/transitions';

export default combineReducers({
  panel: panelReducer,
  items: itemsReducer,
  types: typesReducer,
  state: statesReducer,
  transitions: transitionsReducer,
});
