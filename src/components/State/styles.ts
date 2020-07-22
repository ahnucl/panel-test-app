import styled from 'styled-components';

interface ColumnProps {
  color: string;
}

export const Column = styled.section<ColumnProps>`
  width: 300px;
  display: flex;
  margin-top: 30px;

  h2 {
    /* align-self: center; */
    padding-bottom: 5px;
    border-bottom: solid 2px ${props => props.color};
  }

  flex-direction: column;

  & + section {
    margin-left: 10px;
  }
`;
