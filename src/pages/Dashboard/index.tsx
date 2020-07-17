import React, { useState, useEffect } from 'react';
import data from '../../data/panel-data.json';

/**
 * Fazer do jeito que eu sei, com Hooks, e depois alterar
 * para usar Redux
 */

interface PanelColumn {
  name: string;
  color: string;
}

interface Panel {
  name: string;
  columns: PanelColumn[];
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
