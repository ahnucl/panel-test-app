import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import itemsReducer from './ducks/items';

const store = createStore(itemsReducer, composeWithDevTools());

export default store;
