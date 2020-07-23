import React from 'react';

import { Container } from './styles';

import CardTypesMap from '../../data/CardTypesMap';

interface State {
  id: string;
  title: string;
  color: string;
}

interface Type {
  id: string;
  title: string;
  icon?: string;
  count: number;
}

interface TypeBarProps {
  typeArray: Type[];
  stateColor: string;
  /**
   * cor
   * tipos + contagem
   */
}

const TypeBar: React.FC<TypeBarProps> = ({ typeArray, stateColor }) => {
  return (
    <Container color={stateColor}>
      {typeArray.map(type => {
        const IconToRender = CardTypesMap[type.id];

        return (
          <>
            {type.count !== 0 && (
              <div key={type.id}>
                <IconToRender />
                <span>{type.count}</span>
              </div>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default TypeBar;
