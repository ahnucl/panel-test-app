import React, { useState } from 'react';
import { FiVideo, FiPaperclip, FiVolume2 } from 'react-icons/fi';
import { IconType } from 'react-icons';
import data from '../../data/panel-data.json';

import { Container, TypesContainer, CardsContainer } from './styles';

interface PanelColumn {
  name: string;
  color: string;
}

interface Panel {
  name: string;
  domainName: string;
  columns: PanelColumn[];
}

interface CardType {
  name: string;
  icon: string;
}

const Panel: React.FC = () => {
  const [panelStructure] = useState<Panel>(data.panels[0]);
  const [cardTypes] = useState<CardType[]>(data.cardTypes);

  const CardTypesMapper: { [index: string]: IconType } = {
    video: FiVideo,
    audio: FiVolume2,
    paperclip: FiPaperclip,
  };

  return (
    <>
      <h1>{panelStructure.domainName}</h1>
      <Container>
        {panelStructure.columns.map(column => (
          <section key={column.name}>
            <h2>{column.name}</h2>

            <TypesContainer>
              {/** Types space */}
              {cardTypes.map(cardType => {
                const IconToRender = CardTypesMapper[cardType.name];

                return (
                  <div key={cardType.name}>
                    <IconToRender />
                    <span>(2)</span>
                  </div>
                );
              })}
            </TypesContainer>

            {/** Card space */}
            <CardsContainer>
              <div>
                <h3>
                  <FiVideo />
                  Título do card
                </h3>
                <p>Fulano de tal</p>
              </div>

              <div>
                <h3>
                  <FiPaperclip />
                  Título do card
                </h3>
                <p>João Ninguém</p>
              </div>

              <div>
                <h3>
                  <FiPaperclip />
                  Título do card
                </h3>
                <p>Ciclano</p>
              </div>
            </CardsContainer>
          </section>
        ))}
      </Container>
    </>
  );
};

export default Panel;
