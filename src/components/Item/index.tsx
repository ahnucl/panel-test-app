import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { Card, ButtonContainer, Button } from './styles';

import CardTypesMap from '../../data/CardTypesMap';

interface Type {
  id: string;
  title: string;
  icon?: string;
}

interface State {
  id: string;
  title: string;
  color: string;
}

interface ItemProps {
  itemData: {
    id: string;
    type: string;
    author: string;
    title: string;
    state: string;
  };
  transitions: {
    private?: string[];
    revision?: string[];
    released?: string[];
    published?: string[];
  };
  handleTransition(cardId: string, to: string): void;
  states: State[];
  TypeIcon: IconType;
}

const Item: React.FC<ItemProps> = ({
  itemData: { id, author, title, state },
  transitions,
  handleTransition,
  states,
  TypeIcon,
}) => {
  return (
    <Card>
      <h3>
        <TypeIcon />
        {title}
      </h3>
      <p>{author}</p>
      <ButtonContainer>
        {transitions[state as keyof typeof transitions]?.map(transition => (
          <Button
            key={transition}
            type="button"
            onClick={() => handleTransition(id, transition)}
            color={states.reduce(
              (acc, cur) => (cur.id === transition ? cur.color : acc),
              '',
            )}
          >
            {states.reduce(
              (acc, cur) => (cur.id === transition ? cur.title : acc),
              '',
            )}
          </Button>
        ))}
      </ButtonContainer>
    </Card>
  );
};

export default Item;
