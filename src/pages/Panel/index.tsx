import React, { useState } from 'react';
import { FiVideo, FiPaperclip } from 'react-icons/fi';
import data from '../../data/panel-data.json';

import { Container, PanelColumn } from './styles';

interface PanelColumn {
  name: string;
  color: string;
}

interface Panel {
  name: string;
  domainName: string;
  columns: PanelColumn[];
}

const Panel: React.FC = () => {
  const [panelStructure] = useState<Panel>(data.panels[0]);

  console.log(panelStructure);

  return (
    <>
      <h1>{panelStructure.domainName}</h1>
      <Container>
        {panelStructure.columns.map(column => (
          <section key={column.name}>
            <h2>{column.name}</h2>

            <div>
              {/** Types space */}
              <div>
                <FiVideo />
                <span>(1)</span>
              </div>
              <div>
                <FiPaperclip />
                <span>(2)</span>
              </div>
              <div />
            </div>

            <div>
              {/** Card space */}
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
            </div>
          </section>
        ))}
      </Container>
    </>
  );
};

export default Panel;
