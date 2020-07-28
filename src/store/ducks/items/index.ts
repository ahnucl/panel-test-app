import { Reducer } from 'redux';
import data from '../../dataProvider';
import { ItemsState, ItemActionTypes, Item } from './types';

/**
 * Initial state
 */
const INITIAL_STATE: ItemsState = {
  data: data.items,
  loading: false,
  error: false,
};

/**
 * Item reducer
 */
export const reducer: Reducer<ItemsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.TO_PRIVATE: {
      // Encapsular esse bloco?
      const card = state.data.find(
        item => item.id === action.payload.id,
      ) as Item;
      const index = state.data.indexOf(card);
      //

      card.state = 'private';

      return {
        data: [
          ...state.data.slice(0, index),
          card, // Deixar o item modificado na mesma posição
          ...state.data.slice(index + 1, state.data.length),
        ],
        loading: false,
        error: false,
      };
    }
    case ItemActionTypes.TO_REVIEW: {
      const card = state.data.find(
        item => item.id === action.payload.id,
      ) as Item;
      const index = state.data.indexOf(card);

      card.state = 'review';

      return {
        data: [
          ...state.data.slice(0, index),
          card, // Deixar o item modificado na mesma posição
          ...state.data.slice(index + 1, state.data.length),
        ],
        loading: false,
        error: false,
      };
    }
    case ItemActionTypes.TO_RELEASE: {
      const card = state.data.find(
        item => item.id === action.payload.id,
      ) as Item;
      const index = state.data.indexOf(card);

      card.state = 'released';

      return {
        data: [
          ...state.data.slice(0, index),
          card, // Deixar o item modificado na mesma posição
          ...state.data.slice(index + 1, state.data.length),
        ],
        loading: false,
        error: false,
      };
    }
    case ItemActionTypes.TO_PUBLISHED: {
      const card = state.data.find(
        item => item.id === action.payload.id,
      ) as Item;
      const index = state.data.indexOf(card);

      card.state = 'published';

      return {
        data: [
          ...state.data.slice(0, index),
          card, // Deixar o item modificado na mesma posição
          ...state.data.slice(index + 1, state.data.length),
        ],
        loading: false,
        error: false,
      };
    }
    case ItemActionTypes.NEW_ITEM: {
      const newCard = action.payload as Item;
      console.log(newCard);
      return {
        data: [...state.data, newCard],
        loading: false,
        error: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
