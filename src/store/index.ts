import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import data from '../data/panel-data-new-format.json';

interface Item {
  id: string;
  title: string;
  author: string;
  type: string;
  state: string;
}

interface ItemState {
  readonly data: Item[];
  // readonly loading: boolean;
  // readonly error: boolean;
}

// enum TransitionTypes {
//   TRANSITION = 'TRANSITION'
// }

const TO_PRIVATE = 'TO_PRIVATE';
const TO_REVISION = 'TO_REVISION';
const TO_RELEASE = 'TO_RELEASE';
const TO_PUBLISHED = 'TO_PUBLISHED';

const panelNumber = 0;
const INITIAL_STATE = { data: data.panels[panelNumber].items };

interface Action {
  type: string;
  cardId: string;
}

const itemsReducer = (
  state: ItemState = INITIAL_STATE,
  action: Action,
): ItemState => {
  switch (action.type) {
    case TO_PRIVATE:
      return { data: [] };
    case TO_REVISION:
      return { data: [] };
    case TO_RELEASE:
      return { data: [] };
    case TO_PUBLISHED: {
      const card = state.data.filter(item => item.id === action.cardId);
      const index = state.data.indexOf(card[0]);

      card[0].state = 'revision';

      const teste = {
        data: [
          ...state.data.slice(0, index),
          ...state.data.slice(index + 1, state.data.length),
          card[0],
        ],
      };
      console.log(teste);
      return state;
    }

    default:
      return state;
  }
};

const store = createStore(itemsReducer, composeWithDevTools());
console.log(store.getState());
export default store;
