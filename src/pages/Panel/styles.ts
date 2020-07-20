import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;

  section {
    width: 300px;
    border: solid;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & + section {
      margin-left: 10px;
    }
  }
`;

export const TypesContainer = styled.div`
  /** Types Block */
  border-bottom: solid 1px;
  /* max-height: 35px; */
  display: flex;

  div {
    margin: 5px;

    svg {
      margin-right: 3px;
    }
  }
`;

export const CardsContainer = styled.div`
  > div {
    /** Cards */
  }
`;
