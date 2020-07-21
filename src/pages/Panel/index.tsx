import React, { useState, useEffect } from 'react';

import { uuid } from 'uuidv4';
import CardTypesMapper from '../../data/CardTypesMapper';

import data from '../../data/panel-data.json';
import transitions from '../../data/transitions.json';

import { Container, TypesContainer, CardsContainer } from './styles';

/**
 * Iterar pelas colunas, e futuramente por alguma regra de negócio para determinar as ações dos botões
 */

const Panel: React.FC = () => {
  const [panelStructure] = useState(data.panels[1]);
  const [cardTypes] = useState(panelStructure.cardTypes);
  const [cards, setCards] = useState(panelStructure.data);

  useEffect(() => {
    const type = 'type1';
    const state = 'state2';
    const TransitionButtons = transitions[type][state].map(transition => (
      <button type="button">{transition}</button>
    ));
    console.log(TransitionButtons);
  }, []);

  function handleClick(to: string, from: string, cardId: string): void {
    const newCards = cards.map(card =>
      card.id === cardId ? { ...card, column: to } : card,
    );
    setCards(newCards);
  }

  function handleCreateCard(): void {
    const newCard = {
      id: uuid(),
      types: ['video'],
      author: 'Leonardo',
      title: `${panelStructure.domainName} criada`,
      column: panelStructure.columns[0].id,
    };

    setCards([...cards, newCard]);
  }

  return (
    <>
      <h1>{panelStructure.domainName}</h1>
      <button type="submit" onClick={handleCreateCard}>
        {`Criar ${panelStructure.domainName}`}
      </button>
      <Container>
        {panelStructure.columns.map((column, _, self) => (
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
