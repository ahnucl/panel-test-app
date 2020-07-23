import styled from 'styled-components';

export const Card = styled.div`
  height: 120px;
  padding: 5px;
  margin: 5px;

  border: solid 1px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    margin-right: 5px;
  }

  div {
    align-self: center;
    button {
      margin: 0 2px;
      padding: 2px;
    }
  }
`;

export const ButtonContainer = styled.div``;
