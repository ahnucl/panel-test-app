import data from '../dataProvider';

/**
 * Action types
 */
export enum PanelActionTypes {}

interface PanelAction {
  type: PanelActionTypes;
  payload: {
    cardId: string;
  };
}

/**
 * Panel description
 */
export interface Panel {
  id: string;
  title: string;
}

export interface PanelState {
  readonly data: Panel;
  readonly loading: boolean;
  readonly error: boolean;
}

/**
 * Initial state
 */
const INITIAL_STATE = {
  data: {
    id: data.id,
    title: data.title,
  },
  loading: false,
  error: false,
};

/**
 * Action Creators
 */
export const Creators = {};

/**
 * Panel reducer
 */

export default function panelReducer(
  state = INITIAL_STATE,
  action: PanelAction,
): PanelState {
  switch (action) {
    default:
      return state;
  }
}
