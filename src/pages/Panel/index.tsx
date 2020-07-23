import React, { useState, useCallback } from 'react';
import { uuid } from 'uuidv4';

import dataNew from '../../data/panel-data-new-format.json';
import CardTypesMap from '../../data/CardTypesMap';

import { Container, Header } from './styles';
import StateColumn from '../../components/State';
import Item from '../../components/Item';
import TypeBar from '../../components/TypeBar';

interface State {
  id: string;
  title: string;
  color: string;
}

// interface Item {
//   id: string;
//   title: string;
//   author: string;
//   type: string;
//   state: string;
// }

interface Type {
  id: string;
  title: string;
  icon?: string;
  count: number;
}

interface TransitionMap {
  [index: string]: {
    private?: string[];
    revision?: string[];
    released?: string[];
    published?: string[];
  };
}

const Panel: React.FC = () => {
  const panelNumber = 0;
  const [title] = useState(dataNew.panels[panelNumber].title);
  const [states] = useState(dataNew.panels[panelNumber].states);
  const [types] = useState(dataNew.panels[panelNumber].types);
  const [items, setItems] = useState(dataNew.panels[panelNumber].items);
  const [transitions] = useState<TransitionMap>(
    dataNew.panels[panelNumber].transitions,
  );

  const handleClick = useCallback(
    (cardId: string, to: string): void => {
      const newItems = items.map(item =>
        item.id === cardId ? { ...item, state: to } : item,
      );
      setItems(newItems);
    },
    [items],
  );

  const handleCreateItem = useCallback((): void => {
    const newItem = {
      id: uuid(),
      title: 'Item criado: matéria',
      author: 'Leonardo',
      type: types[0].id,
      state: states[0].id,
    };

    setItems([...items, newItem]);
  }, [items, states, types]);

  const calculateTypesCountForState = useCallback(
    (currentState: State): Type[] => {
      return types.map(type => ({
        ...type,
        count: items.reduce(
          (acc, cur) =>
            cur.type === type.id && cur.state === currentState.id
              ? acc + 1
              : acc,
          0,
        ),
      }));
    },
    [items, types],
  );

  return (
    <>
      <Header>
        <h1>{title}</h1>
        <button type="submit" onClick={handleCreateItem}>
          Novo Item
        </button>
      </Header>

      <Container>
        {states.map(state => (
          <StateColumn key={state.id} stateData={state}>
            <TypeBar
              typeArray={calculateTypesCountForState(state)}
              stateColor={state.color}
            />
            {items.map(
              item =>
                item.state === state.id && (
                  <Item
                    key={item.id}
                    itemData={item}
                    transitions={transitions[item.type]}
                    handleTransition={handleClick}
                    states={states}
                    TypeIcon={CardTypesMap[item.type]}
                  />
                ),
            )}
          </StateColumn>
        ))}
      </Container>
    </>
  );
};

export default Panel;
