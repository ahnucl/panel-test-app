import data from '../../data/panel-data-new-format.json';
/**
 * Para mudar o painel mudar a linha abaixo
 */
const panelNumber = 0;

/**
 * Action Types
 */
export enum ItemActionTypes {
  TO_PRIVATE = 'TO_PRIVATE',
  TO_REVIEW = 'TO_REVISION',
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
const INITIAL_STATE = {
  data: data.panels[panelNumber].items,
  loading: false,
  error: false,
};

/**
 * Action Creators
 */
export const Creators = {
  returnCardToPrivate: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_PRIVATE,
    payload: {
      cardId,
    },
  }),

  sendCardToReview: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_REVIEW,
    payload: {
      cardId,
    },
  }),

  releaseCard: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_RELEASE,
    payload: {
      cardId,
    },
  }),

  publishCard: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_PUBLISHED,
    payload: {
      cardId,
    },
  }),
};

/**
 * Item reducer
 */
export default function itemsReducer(
  state: ItemsState = INITIAL_STATE,
  action: ItemAction,
): ItemsState {
  switch (action.type) {
    case ItemActionTypes.TO_PRIVATE: {
      // Encapsular esse bloco?
      const card = state.data.find(
        item => item.id === action.payload.cardId,
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
        item => item.id === action.payload.cardId,
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
        item => item.id === action.payload.cardId,
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
        item => item.id === action.payload.cardId,
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
    default:
      return state;
  }
}
