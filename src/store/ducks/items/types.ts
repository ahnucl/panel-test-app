export enum ItemTypes {
  TO_PRIVATE = 'TO_PRIVATE',
  TO_REVISION = 'TO_REVISION',
  TO_RELEASE = 'TO_RELEASE',
  TO_PUBLISHED = 'TO_PUBLISHED',
}

export interface Item {
  id: string;
  title: string;
  author: string;
  type: string;
  state: string;
}

export interface ItemState {
  readonly data: Item[];
  // readonly loading: boolean;
  // readonly error: boolean;
}
