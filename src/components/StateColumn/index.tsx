import React from 'react';
import { Column } from './styles';

interface Props {
  stateData: {
    id: string;
    title: string;
    color: string;
  };
}

const StateColumn: React.FC<Props> = ({
  children,
  stateData: { id, title, color },
}) => {
  return (
    <Column id={id} color={color}>
      <h2>{title}</h2>
      {children}
    </Column>
  );
};

export default StateColumn;
