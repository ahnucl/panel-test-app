import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: solid 3px ${props => props.color};
  height: 30px;
  margin-top: 3px;
  display: flex;
  justify-content: center;

  div {
    margin: 5px;

    svg {
      margin-right: 3px;
    }
  }
`;
