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

    > div {
      /** Types Block */
      border: solid;
      /* max-height: 35px; */
      display: flex;

      div {
        margin: 5px;

        svg {
          margin-right: 3px;
        }
      }
    }

    div + div {
      /** Cards Block */
      flex-direction: column;
    }
  }
`;

export const PanelColumn = styled.div``;
