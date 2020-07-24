import data from '../../data/panel-data-new-format.json';

/**
 * Action Types
 */
export enum ItemActionTypes {
  TO_PRIVATE = 'TO_PRIVATE',
  TO_REVISION = 'TO_REVISION',
  TO_RELEASE = 'TO_RELEASE',
  TO_PUBLISHED = 'TO_PUBLISHED',
}

interface ItemAction {
  type: ItemActionTypes;
  payload: {
    cardId: string;
  };
}

/**
 * Item description
 */
export interface Item {
  id: string;
  title: string;
  author: string;
  type: string;
  state: string;
}

export interface ItemsState {
  readonly data: Item[];
  readonly loading: boolean;
  readonly error: boolean;
}

/**
 * Initial state
 */
const panelNumber = 0;
const INITIAL_STATE = {
  data: data.panels[panelNumber].items,
  loading: false,
  error: false,
};

/**
 * Action Creators
 */
export function publishItem(itemId: string): void {}

export function returnItemToPrivate(itemId: string): void {}

export function sendItemToReview(itemId: string): void {}

export function releaseItem(itemId: string): void {}

/**
 * Item reducer
 */
export default function itemsReducer(
  state: ItemsState = INITIAL_STATE,
  action: ItemAction,
): ItemsState {
  switch (action.type) {
    case ItemActionTypes.TO_PRIVATE: {
      return state;
    }
    case ItemActionTypes.TO_REVISION: {
      return state;
    }
    case ItemActionTypes.TO_RELEASE: {
      return state;
    }
    case ItemActionTypes.TO_PUBLISHED: {
      // const card = state.filter(item => item.id === action.payload.cardId);
      const card = state.data.find(
        item => item.id === action.payload.cardId,
      ) as Item;
      const index = state.data.indexOf(card);

      // card[0].state = 'revision';
      card.state = 'revision';

      return {
        data: [
          ...state.data.slice(0, index),
          card, // Deixar o item modificado na mesma posição
          ...state.data.slice(index + 1, state.data.length),
        ],
        loading: false,
        error: false,
      };

      return state;
    }
    default:
      return state;
  }
}
