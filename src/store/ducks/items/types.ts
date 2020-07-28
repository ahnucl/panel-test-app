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

/**
 * Item Data type
 */
export interface Item {
  id: string;
  title: string;
  author: string;
  type: string;
  state: string;
}

/**
 * Item state
 */
export interface ItemsState {
  readonly data: Item[];
  readonly loading: boolean;
  readonly error: boolean;
}
