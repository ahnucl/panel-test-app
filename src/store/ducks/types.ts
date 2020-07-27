import data from '../dataProvider';

/**
 * Action Types
 */
export enum TypesActionTypes {}

interface TypesAction {
  type: TypesActionTypes;
  payload: {
    cardId: string;
  };
}

/**
 * Type description
 */
export interface Type {
  id: string;
  title: string;
  icon: string;
}

export interface TypeState {
  readonly data: Type[];
  readonly loading: boolean;
  readonly error: boolean;
}

/**
 * Initial state
 */
const INITIAL_STATE = {
  data: data.types,
  loading: false,
  error: false,
};

/**
 * Action Creators
 */
export const Creators = {};

/**
 * Type reducer
 */
export default function typeReducer(
  state = INITIAL_STATE,
  action: TypesAction,
): TypeState {
  switch (action) {
    default:
      return state;
  }
}
