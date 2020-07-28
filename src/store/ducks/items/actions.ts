import { action } from 'typesafe-actions';
import { Item, ItemActionTypes } from './types';

/**
 * Action Creators
 */
export const returnCardToPrivate = (cardId: string) =>
  action(ItemActionTypes.TO_PRIVATE, { cardId });

export const sendCardToReview = (cardId: string) =>
  action(ItemActionTypes.TO_REVIEW, { cardId });

export const releaseCard = (cardId: string) =>
  action(ItemActionTypes.TO_RELEASE, { cardId });

export const publishCard = (cardId: string) =>
  action(ItemActionTypes.TO_PUBLISHED, { cardId });

export const createCard = (card: Item) =>
  action(ItemActionTypes.NEW_ITEM, { card });

/*
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
*/
