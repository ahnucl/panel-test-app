import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: solid 1px ${props => props.color};

  display: flex;
  justify-content: center;

  div {
    margin: 5px;

    svg {
      margin-right: 3px;
    }
  }
`;
