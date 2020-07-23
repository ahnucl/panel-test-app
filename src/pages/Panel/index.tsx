import React, { useState, useCallback, useEffect } from 'react';
import { uuid } from 'uuidv4';

import CardTypesMap from '../../data/CardTypesMap';
import data from '../../data/panel-data.json';
import dataNew from '../../data/panel-data-new-format.json';

import { Container, TypesContainer, CardsContainer, Header } from './styles';
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
  const [panelColumns] = useState(data.panels[1]);
  const [cardTypes] = useState(panelColumns.cardTypes);
  const [cards, setCards] = useState(panelColumns.data);

  /**
   * New structure
   */
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
                  />
                ),
            )}
          </StateColumn>
        ))}
      </Container>

      <Container>
        {panelColumns.columns.map((column, _, self) => (
          <section key={column.id}>
            <h2>{column.name}</h2>

            <TypesContainer>
              {/** Types space */}
              {cardTypes.map(cardType => {
                const IconToRender = CardTypesMap[cardType.name];

                return (
                  <div key={cardType.name}>
                    <IconToRender />
                    <span>
                      {cards.reduce(
                        (acc, cur) =>
                          cur.column === column.id &&
                          cur.types.includes(cardType.name)
                            ? acc + 1
                            : acc,
                        0,
                      )}
                    </span>
                  </div>
                );
              })}
            </TypesContainer>

            <CardsContainer>
              {/** Card space */}
              {cards.map(card => {
                if (card.column === column.id) {
                  const IconsToRender = card.types.map(
                    type => CardTypesMap[type],
                  );

                  return (
                    /** Isso aqui é um componente! Está retornando JSX */
                    <div key={card.id}>
                      <h3>
                        {IconsToRender.map(Icon => (
                          <Icon />
                        ))}
                        {card.title}
                      </h3>
                      <p>{card.author}</p>

                      <div>
                        {self.map(selfColumn => {
                          if (selfColumn.id !== column.id) {
                            return (
                              <button
                                key={selfColumn.name}
                                type="button"
                                // onClick={() =>
                                //   handleClick(card.id, selfColumn.id)
                                // }
                              >
                                {selfColumn.name}
                              </button>
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                }
                return <> </>;
              })}
            </CardsContainer>
          </section>
        ))}
      </Container>
    </>
  );
};

export default Panel;
