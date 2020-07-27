import data from '../dataProvider';

/**
 * Action Types
 */
export enum TransitionActionTypes {}

interface TransitionAction {
  type: TransitionActionTypes;
  payload: {
    cardId: string;
  };
}

/**
 * Transaction description
 */

export interface Transition {
  type: string;
  from: string;
  to: string;
}

export interface TransitionsState {
  readonly data: Transition[];
  readonly loading: boolean;
  readonly error: boolean;
}

/**
 * Initial state
 */

const initialData: Transition[] = [];
const transitionsKeys = Object.keys(data.transitions);

transitionsKeys.map(type => {
  const transitionsObj =
    data.transitions[type as keyof typeof data.transitions];
  const transitionsFrom = Object.keys(transitionsObj);

  transitionsFrom.map(from => {
    transitionsObj[from as keyof typeof transitionsObj].map(to => {
      initialData.push({ type, from, to });
    });
  });
});

const INITIAL_STATE = {
  data: initialData,
  loading: false,
  error: false,
};

/**
 * Action Creators
 */
export const Creators = {};

/**
 * Item reducer
 */
export default function itemsReducer(
  state = INITIAL_STATE,
  action: TransitionAction,
): TransitionsState {
  switch (action.type) {
    default:
      return state;
  }
}
