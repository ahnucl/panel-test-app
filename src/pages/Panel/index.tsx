import React, { useState, useEffect } from 'react';

import { uuid } from 'uuidv4';
import CardTypesMapper from '../../data/CardTypesMapper';

import data from '../../data/panel-data.json';
import dataNew from '../../data/panel-data-new-format.json';

import { Container, TypesContainer, CardsContainer, Header } from './styles';

interface State {
  id: string;
  title: string;
  color: string;
}

interface Item {
  id: string;
  title: string;
  author: string;
  type: string;
  state: string;
}

interface Type {}

interface Transition {}

const Panel: React.FC = () => {
  const [panelColumns] = useState(data.panels[1]);
  const [cardTypes] = useState(panelColumns.cardTypes);
  const [cards, setCards] = useState(panelColumns.data);

  /**
   * New structure
   */
  const panelNumber = 0;
  const [title, setTitle] = useState(dataNew.panels[panelNumber].title);
  const [states, setStates] = useState<State[]>(
    dataNew.panels[panelNumber].states,
  );
  const [types, setTypes] = useState(dataNew.panels[panelNumber].types);
  const [items, setItems] = useState<Item[]>(dataNew.panels[panelNumber].items);
  const [transitions, setTransitions] = useState(
    dataNew.panels[panelNumber].transitions,
  );

  function handleClick(to: string, from: string, cardId: string): void {
    const newCards = cards.map(card =>
      card.id === cardId ? { ...card, column: to } : card,
    );
    setCards(newCards);
  }

  function handleCreateItem(): void {
    const newItem: Item = {
      id: uuid(),
      title: 'Item criado: matéria',
      author: 'Leonardo',
      type: types[0].id,
      state: states[0].id,
    };

    setItems([...items, newItem]);
  }

  return (
    <>
      <Header>
        <h1>{title}</h1>
        <button type="submit" onClick={handleCreateItem}>
          Novo Item
        </button>
      </Header>
      <Container>
        {panelColumns.columns.map((column, _, self) => (
          <section key={column.id}>
            <h2>{column.name}</h2>

            <TypesContainer>
              {/** Types space */}
              {cardTypes.map(cardType => {
                const IconToRender = CardTypesMapper[cardType.name];

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
                    type => CardTypesMapper[type],
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
                                onClick={() =>
                                  handleClick(selfColumn.id, column.id, card.id)}
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
