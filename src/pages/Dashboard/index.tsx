import React, { useState, useEffect } from 'react';
import data from '../../data/panel-data.json';

/**
 * Fazer do jeito que eu sei, com Hooks, e depois alterar
 * para usar Redux
 */

interface PanelColumn {
  id: string;
  name: string;
  color: string;
}

interface CardType {
  name: string;
  icon: string;
}

interface Card {
  id: string;
  types: string[];
  author: string;
  title: string;
  column: string;
}

interface Panel {
  name: string;
  domainName: string;
  columns: PanelColumn[];
  cardTypes: CardType[];
  data: Card[];
}

const Dashboard: React.FC = () => {
  const [panels] = useState<Panel[]>(data.panels);

  // useEffect(() => {}, []);

  return (
    <>
      <h1>Dashboard Page</h1>
      {panels.map(panel => (
        <a key={panel.name} href={`panel/${panel.name}`}>
          {panel.name}
        </a>
      ))}
    </>
  );
};

export default Dashboard;
