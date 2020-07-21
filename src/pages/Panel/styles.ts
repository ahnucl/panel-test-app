import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;

  section {
    width: 300px;
    border: solid;
    display: flex;

    h2 {
      align-self: center;
    }

    flex-direction: column;

    & + section {
      margin-left: 10px;
    }
  }
`;

export const TypesContainer = styled.div`
  border-bottom: solid 1px;

  display: flex;
  justify-content: center;

  div {
    margin: 5px;

    svg {
      margin-right: 3px;
    }
  }
`;

export const CardsContainer = styled.div`
  > div {
    /** Card */

    height: 120px;
    padding: 5px;
    margin: 5px;

    border: solid 1px;
    border-radius: 5px;
  }

  svg {
    margin-right: 5px;
  }
`;
