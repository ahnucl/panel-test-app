import React from 'react';
import { Card, ButtonContainer } from './styles';

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
}

const Item: React.FC<ItemProps> = ({
  itemData: { id, type, author, title, state },
  transitions,
  handleTransition,
  states,
}) => {
  const TypeIcon = CardTypesMap[type];

  // function handleTransition(cardId: string, to: string): void {
  //   /** Com Redux seria só dispachar uma action...
  //    *  Como não estou usando Redux agora, preciso passar a função como prop
  //    */
  //   console.log(cardId, to);
  // }

  return (
    <Card>
      <h3>
        <TypeIcon />
        {title}
      </h3>
      <p>{author}</p>
      <ButtonContainer>
        {transitions[state as keyof typeof transitions]?.map(transition => (
          <button
            key={transition}
            type="button"
            onClick={() => handleTransition(id, transition)}
          >
            {states.reduce(
              (acc, cur) => (cur.id === transition ? cur.title : acc),
              '',
            )}
          </button>
        ))}
      </ButtonContainer>
    </Card>
  );
};

export default Item;
