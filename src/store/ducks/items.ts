import data from '../dataProvider';

/**
 * Action Types
 */
export enum ItemActionTypes {
  TO_PRIVATE = 'TO_PRIVATE',
  TO_REVIEW = 'TO_REVISION',
  TO_RELEASE = 'TO_RELEASE',
  TO_PUBLISHED = 'TO_PUBLISHED',
  NEW_ITEM = 'NEW_ITEM',
}

interface ItemAction {
  type: ItemActionTypes;
  payload: {
    id: string;
    state?: string;
    author?: string;
    title?: string;
    type?: string;
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
  data: data.items,
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
      id: cardId,
    },
  }),

  sendCardToReview: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_REVIEW,
    payload: {
      id: cardId,
    },
  }),

  releaseCard: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_RELEASE,
    payload: {
      id: cardId,
    },
  }),

  publishCard: (cardId: string): ItemAction => ({
    type: ItemActionTypes.TO_PUBLISHED,
    payload: {
      id: cardId,
    },
  }),
  createCard: (
    cardId: string,
    cardState: string,
    title: string,
    author: string,
    type: string,
  ): ItemAction => ({
    type: ItemActionTypes.NEW_ITEM,
    payload: {
      id: cardId,
      state: cardState,
      author,
      title,
      type,
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
      return {
        data: [...state.data, newCard],
        loading: false,
        error: false,
      };
    }
    default:
      return state;
  }
}
