import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  section {
    width: 300px;
    display: flex;
    margin-top: 30px;

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
  }
`;
