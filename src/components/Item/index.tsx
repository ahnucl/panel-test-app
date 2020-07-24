import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { connect } from 'react-redux';
import { Card, ButtonContainer, Button } from './styles';
import { Creators } from '../../store/ducks/items';

interface ItemState {
  readonly data: Item[];
  readonly loading: boolean;
  readonly error: boolean;
}

interface Item {
  id: string;
  title: string;
  author: string;
  type: string;
  state: string;
}

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

interface TesteProps {
  teste: {
    data: Item[];
  };
}

interface DispatchProps {
  testeRedux: (cardId: string) => void;
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

const Item: React.FC<ItemProps & TesteProps & DispatchProps> = ({
  itemData: { id, author, title, state },
  transitions,
  handleTransition,
  states,
  TypeIcon,
  testeRedux,
  teste: { data },
}) => {
  const [cardColor] = useState(
    states.find(stateFind => stateFind.id === state)?.color,
  );

  return (
    <Card color={cardColor}>
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
            // onClick={() => testeRedux(id)}
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

const mapStateToProps = (state: ItemState): TesteProps => ({
  teste: {
    data: state.data,
  },
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  testeRedux(cardId: string) {
    dispatch(Creators.publishCard(cardId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
