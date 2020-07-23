import styled from 'styled-components';

interface ButtonProps {
  color: string;
}

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
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button<ButtonProps>`
  margin: 0 2px;
  padding: 2px;

  /* border: solid 2px ${props => props.color}; */
  background: ${props => props.color};
  opacity: 0.9;
  color: #fff;

  border-radius: 5px;
`;
