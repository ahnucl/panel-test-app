import data from '../dataProvider';

/**
 * Action Types
 */
export enum StateActionTypes {}

interface StateAction {
  type: StateActionTypes;
  payload: {
    cardId: string;
  };
}

/**
 * State description
 */
export interface State {
  id: string;
  title: string;
  color: string;
}

// Os nomes type e state estão horríveis!
export interface StatesState {
  readonly data: State[];
  readonly loading: boolean;
  readonly error: boolean;
}

/**
 * Initial state
 */
const INITIAL_STATE = {
  data: data.states,
  loading: false,
  error: false,
};

/**
 * State Creators
 */
export const Creators = {};

/**
 * Item reducer
 */
export default function statesReducer(
  state = INITIAL_STATE,
  action: StateAction,
): StatesState {
  switch (action.type) {
    default:
      return state;
  }
}
