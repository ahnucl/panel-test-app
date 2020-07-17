import React, { useState } from 'react';

import data from '../../data/panel-data.json';

import { Container, PanelColumn } from './styles';

interface PanelColumn {
  name: string;
  color: string;
  acceptedTypes: string[];
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
          <PanelColumn key={column.name}>{column.name}</PanelColumn>
        ))}
      </Container>
    </>
  );
};

export default Panel;
